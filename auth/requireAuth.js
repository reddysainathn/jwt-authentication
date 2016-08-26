const passport = require('passport');
const jwtStrategy = require('../auth/services/jwtStrategy');

passport.use(jwtStrategy);

module.exports = passport.authenticate('jwt', {session:false})