const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
// const cookie = require('cookie');
const { promisify } = require('util');
const AppError = require('../utils/AppError');

const signToken = (id) => {
  const payLoad = { id };
  return jwt.sign(payLoad, process.env.JWT_SECRET, {
    expiresIn: 90,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOption = {
    expiresIn: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOption);
  console.log('Auth successful')
  return res.status(statusCode).json({
    status: 'success',
    role: user.role,
    token,
    data: {
      user,
    },
  });
};

// -------------------SIGNUP----------------
exports.signup = catchAsync(async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    if (!newUser) {
      return next(new AppError('Error in providing data', 404));
    }
    console.log('Signup successful')
    console.log(newUser)
    createSendToken(newUser._id, 200, res);

  } catch (err) {
    console.log(err);
    return next(new AppError(err.message, 500));
  }
});

// -------------------LOGIN ----------------

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError(res, 'Please enter a valid email', 400));
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      new AppError(res, 'Please provide a some correct email or password')
    );
  }

  createSendToken(user, 200, res);
});

// -------------------PROTECT USER----------------
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookie.jwt) {
    token = req.cookie.jwt;
  }
  if (!token) {
    return next(new AppError(res, 'Invalid email or password', 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError(res, 'This account has been expired'));
  }
  if (!decoded) {
    // return res.status(404).json({status:'fail', message: 'Invalid Email or Password'});
    return next(new AppError(res, 'Invalid email or password', 401));
  }
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
};

// -------------------LOGO-OUT----------------
exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expiresIn: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  return res.status(200).json({ status: 'success' });
};

// -------------------RESTRICT_TO----------------
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      // res.status(403).json({status: 'failed', message: 'You are authorised to use it'})
      return next(new AppError(res, 'The Invalid emial or password', 401));
    }
    next();
  };
};
