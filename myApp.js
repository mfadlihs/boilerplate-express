var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
	const json = { message: 'Hello json' };
	res.json(json);
});

module.exports = app;
