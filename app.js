const express = require('express');
const mongoose = require('mongoose')
require('dotenv/config');
const app = express();

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/posts', postsRoute)

//HOME ROUTE
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