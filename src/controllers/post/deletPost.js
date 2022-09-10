const deletePostQuery = require('../../database/queries').deletePost;

const deletePost = (req, res) => {
  deletePostQuery(req.params.id)
    .then(res.json({ msg: 'deleted successfully' }))
    .catch((err) => res.send(err));
};

module.exports = deletePost;
