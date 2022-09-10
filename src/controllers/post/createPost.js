const { addPost } = require('../../database/queries');

const createPost = (req, res) => {
  const { userId, text, img } = req.body;
  addPost(userId, text, img)
    .then((data) => res.send(data.rows))
    .catch((err) => res.send(err));
};

module.exports = createPost;
