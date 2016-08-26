const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const secretKey = require('../../config').dev.jwt.secretKey;
const User = require('../models/user');

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeader(),
	secretOrKey: secretKey
}

const strategy = new jwtStrategy(options, function(jwt_payload, done) {
	User.findOne({email: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
})

module.exports = strategy;