const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config');
const app = express();

//ROUTES
app.get('/', (req, res) => {
	res.send('Home!')
});
app.get('/posts', (req, res) => {
	res.send('Post!')
});

//CONNECT TO DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	() => console.log('connected to db')
);
//Listening
app.listen(3000);