const postsRouter = require('express').Router();
const expressAsyncHandler = require('express-async-handler');
const { getCollection } = require('../controllers/posts');

postsRouter.get('/', expressAsyncHandler(getCollection));

module.exports = postsRouter;
