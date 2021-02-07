const express = require('express');
const Post = require('../models/post');
const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');
const PostsController = require('../controllers/posts');

const router = express.Router();


router.post("", checkAuth, extractFile, PostsController.postCreate);

router.put('/:id', checkAuth, extractFile, PostsController.postUpdate);

router.get('', PostsController.fetchPosts);

router.get('/:id', PostsController.fetchPost);

router.delete('/:id', checkAuth, PostsController.deletePost);

module.exports = router;
