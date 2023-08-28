const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError')
exports.getDoctorDetail = async (req, res, next) => {
  const { email } = req.body;
  const doc = await Doctor({ email });
	if(!doc){
		return next(new AppError(res, 'Invalid email or password', 401))
	}
  res.status(200).json({
    status: 'success',
    data: {
      doc,
    },
  });
};