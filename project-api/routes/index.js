const postsRoutes = require('./posts');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/posts', postsRoutes);
};
