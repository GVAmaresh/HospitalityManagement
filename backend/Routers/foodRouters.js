const foodController = require('../Controllers/foodController');
const express = require('express');
const router = express.Router();

router.route('/foodCourt/:type').post( foodController.getFoods);
router.route('/foodController/addItems').patch( foodController.createFood);
module.exports = router;