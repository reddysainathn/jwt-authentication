const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a model
const userSchema = new Schema({
	email : { type: String, unique: true, lowercase: true },
	password : String
})

// Creating a model class
const User = mongoose.model('user', userSchema);

module.exports = User;