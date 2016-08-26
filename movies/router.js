const requireAuth = require('../auth/requireAuth');
const postMovies = require('./controllers/postMovies');

module.exports = function(app) {
	app.post('/movies', requireAuth, postMovies);
}