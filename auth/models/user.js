const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

// Define a model
const userSchema = new Schema({
	email : { type: String, unique: true, lowercase: true },
	password : String
})

// Pre Save Hook
userSchema.pre('save', function(next) {
	// 'this' to get email and password passed
	const user = this;

	// gen salt
	bcrypt.genSalt(10, function(err, salt) {
		// hash the password with salt
		bcrypt.hash(user.password, salt, null, function(err, hashedPassowrd){
			user.password = hashedPassowrd
			next()
		})
	})
})

// Creating a model class
const User = mongoose.model('user', userSchema);

module.exports = User;