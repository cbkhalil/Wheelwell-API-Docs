const express 	= require('express');
const API_DOCS	= require('./api-docs.json');


const app 		= express();


app.set('views', './Client');
app.set('view engine', 'pug');


app.get('/', function (req, res) {
	res.render('index', API_DOCS);
});

app.use(express.static('Client'));


app.listen(3000, () => {
	console.log('Listening on port 3000!');
});
