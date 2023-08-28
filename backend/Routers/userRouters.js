const userController = require('../Controllers/userController')
const authController = require('../Controllers/authController')
const express = require('express')
const router = express.Router()


router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

router.route('/logout').get(authController.logout);
module.exports = router;