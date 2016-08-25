const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./auth/router');
const mongoose = require('mongoose');
const User = require('./auth/models/user');
const dbconfig = require('./config')['dev']['db'];

app.use(morgan('combined'));
app.use(bodyParser.json({ type : '*/*'}));
router(app);

// DB Connection
const dbUrl = 'mongodb://' 
	+ dbconfig.username 
	+ ':' 
	+ dbconfig.password
	+ '@' + dbconfig.dbUri
	+ ':' + dbconfig.dbPort
	+ '/' + dbconfig.dbName;

mongoose.connect(dbUrl);

var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
	const port = process.env.PORT || 9000;
	const server = http.createServer(app);
	server.listen(port);
});

