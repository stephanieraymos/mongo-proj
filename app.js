const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config');
const app = express();

//IMPORT ROUTES
const postsRoute = require('./routes.posts');

app.use('/posts, postsRoute')
app.get('/', (req, res) => {
	res.send('Home!')
});

//CONNECT TO DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	() => console.log('connected to db')
);
//Listening
app.listen(3000);