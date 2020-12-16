const { findMany, findOne } = require('../models/post');

module.exports.getCollection = async (req, res) => {
  const posts = await findMany();
  res.send(posts);
};

module.exports.findOne = async (req, res) => {
  res.send(await findOne(req.params.id));
};
