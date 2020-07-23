const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', (req, res) => {
  res.send('Post!')
});

router.get('/specific', (req, res) => {
  res.send('Specific post!')
});

router.post('/', (req, res, next) => {
  Post.create(req.body)
    .then(post => {
      console.log('Post created!', post);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(post);
    })
    .catch(err => next(err));
  })

module.exports = router;