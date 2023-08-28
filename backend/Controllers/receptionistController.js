const User = require('../Models/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
let a = ''
exports.checkUser = catchAsync(async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(email);
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return next(new AppError('Patient is Logged in', 404));
    }
    console.log(user);
    a = user
    res.locals.patient = '';
    res.locals.patient = user;
    console.log('===> ',res.locals.patient)
    return res.status(200).json({
      status: 'success',
      message: 'Patient is logged in',
    });
  } catch (err) { 
    console.log(err);
  }
});

exports.passUserDetail = async(req, res, next)=>{
  const {email} = a;
  const user = await User.findOne({ email });
  res.status(200).json({
    status: 'success',
    user
  })
}

exports.updateUser = async (req, res, next) => {
  if (!req.locals.patient) {
    return next(new AppError('Patient is not Logged in', 404));
  }
  const { email } = a;
  console.log(req.body)
  await User.findByIdAndUpdate({ email }, { treatment: [
    {
      tablets: [req.body.tabletName],
      doctor_id: req.body.tabletDoctor,
      date: "2023-08-28T00:00:00Z",
      reason: [req.body.tabletReason],
      bill: req.body.tabletBill
    }
  ]});
  res.status(200).json({
    status: 'success',
    message: 'Patient is Successfully Updated in',
  });
};
