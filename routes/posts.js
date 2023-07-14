const express = require('express');
const { posts, getFeed, getMyFeed } = require('../controllers/posts');
const authenticateToken = require('../middleware');
const checkRole = require('../checkRole');

const postRouter = express.Router();

postRouter.post('/item', authenticateToken, posts);
postRouter.get('/item', authenticateToken, getFeed);
postRouter.get('/my-feeds', authenticateToken, getMyFeed);

module.exports = postRouter;