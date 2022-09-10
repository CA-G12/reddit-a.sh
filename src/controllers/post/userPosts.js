const userPostsQuery = require('../../database/queries').userPosts;

const userPosts = (req, res) => {
  userPostsQuery(req.params.id)
    .then((data) => res.send(data.rows))
    .catch((err) => res.send(err));
};

module.exports = userPosts;
