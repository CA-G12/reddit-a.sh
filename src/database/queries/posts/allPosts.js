const connection = require('../../config/connection');

const allPosts = () => connection.query('select posts.id as postId, users.id as userId, users.firstname, users.lastname,users.img as userImg,  posts._text, posts.img, posts.created from posts Join users on  posts.user_id = users.id');

module.exports = allPosts;
