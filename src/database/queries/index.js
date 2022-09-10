const { checkIfUserExist, insertUser, userByEmail } = require('./users');
const {
  addPost, allPosts, userPosts, deletePost,
} = require('./posts');

module.exports = {
  checkIfUserExist, insertUser, userByEmail, addPost, allPosts, userPosts, deletePost,
};
