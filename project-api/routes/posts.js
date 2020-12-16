const postsRouter = require('express').Router();
const expressAsyncHandler = require('express-async-handler');
const { getCollection, handlePost } = require('../controllers/posts');
const handleImageUpload = require('../middlewares/handleImageUpload');

postsRouter.get('/', expressAsyncHandler(getCollection));
postsRouter.post('/', handleImageUpload, expressAsyncHandler(handlePost));

module.exports = postsRouter;
