const connection = require('../../config/connection');

const addPost = (userId, _text, img) => connection.query(
  'INSERT INTO posts (user_id, _text, img, created) values ($1, $2, $3,  now()) returning *',
  [userId, _text, img],
);

module.exports = addPost;
