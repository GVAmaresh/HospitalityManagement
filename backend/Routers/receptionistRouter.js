const receptionistController = require('../Controllers/receptionistController');
const express = require('express');
const router = express.Router();

router.route('/findUser').post(receptionistController.checkUser);
router.route('/updateUser').post(receptionistController.updateUser);

router.route('/passUser').get(receptionistController.passUserDetail);
module.exports = router;
