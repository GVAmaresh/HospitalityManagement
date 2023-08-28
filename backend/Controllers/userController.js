const express = require('express');
const router = express.Router();
const User = require('../Models/userModel')

exports.createUser = async(req, res)=>{
	const user = await User.create(req.body)

	res.status(201).json({
		status: 'success',
		data:{
			user
		}
	})
}


module.exports = router; 