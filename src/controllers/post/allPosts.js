const postsQuery = require('../../database/queries').allPosts;

const allPosts = (req, res) => {
  postsQuery()
    .then((data) => res.send(data.rows))
    .catch((err) => res.send(err));
};

module.exports = allPosts;
