const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');
const jwtToken = require('../services/jwtToken');  

module.exports = function(req, res, next) {
	const email = req.body.email
	const password = req.body.password

	// Do some more validations (bad json) also check for
	// code errors showing up when bad req
	if(email === undefined || password === undefined) {
		res.send({ error : 'Bad Request'})
	}
	User.findOne({ 'email' : email }, function(err, existingUser) {
		if(err) {
			return next(err);
		}
		if(existingUser) {
			bcrypt.compare(password, existingUser.password, function(err, isMatch) {
				if(isMatch === true) {
					res.json({token: jwtToken.createToken(existingUser.email)});
				} else {
					res.send("Incorrect email or password");
				}
			})
		}
	})
}