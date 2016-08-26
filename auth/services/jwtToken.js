const jwt = require('jsonwebtoken');
const secretKey = require('../../config').dev.jwt.secretKey

module.exports = {
	createToken: function (payload) {
		return jwt.sign({sub: payload}, secretKey)
	}
}