const signup = require('./controllers/signup');
const login = require('./controllers/login');

module.exports = function(app) {
	app.post('/signup', signup);
	app.post('/login', login);
}