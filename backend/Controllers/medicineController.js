const Medicine = require('../Models/medicineModel');
exports.createMedicine = async (req, res) => {
  const medicine = await Medicine.create(req.body);
  res.status(200).json({
    status: 'success',
    message: 'Medicine created successfully',
  });
};
exports.getMedicines = async (req, res) => {
  const medicine = await Medicine.find(req.body);
  if (!medicine) {
    return res.status(404).json({
      status: 'fail',
      message: 'Medicine not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      medicine,
    },
  });
};
