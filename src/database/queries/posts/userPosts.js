const connection = require('../../config/connection');

const userPosts = (id) => connection.query('select posts.id as postId, users.id as userId, users.firstname, users.lastname,users.img as userImg,  posts._text, posts.img, posts.created from posts Join users on  posts.user_id = users.id where users.id = $1', [id]);

module.exports = userPosts;
