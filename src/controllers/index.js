const { signup, login, logout } = require('./auth');
const { homePageC } = require('./user');
const {
  createPost, allPosts, userPosts, deletePost,
} = require('./post');

module.exports = {
  signup, homePageC, login, logout, createPost, allPosts, userPosts, deletePost,
};
