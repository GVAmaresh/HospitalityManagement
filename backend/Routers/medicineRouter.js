const medicineController = require('../Controllers/medicineController');
const express = require('express');
const router = express.Router();

router.route('/medicineCourt/:type').get(medicineController.getMedicines);
router.route('/medicineController/addItems').get(medicineController.createMedicine);
module.exports = router;