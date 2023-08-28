const doctor = require('../Controllers/doctorController');
const express = require('express');
const router = express.Router();

router.route('/:id').get(doctor.getDoctorDetail);
module.exports = router;
