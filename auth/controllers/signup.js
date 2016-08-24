const User = require('../models/user'); 

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
			return res.status(422).send({ error : 'Email is already used' })
		}
		const user = new User({
			email: email,
			password: password
		})
		user.save(function(err, user) {
			if(err) {
				return next(err);
			}
			res.json(user);
		})
	})
}