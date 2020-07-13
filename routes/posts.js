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
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

module.exports = router;