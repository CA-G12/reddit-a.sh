const { signup, login, logout } = require('./auth');
const { homePageC } = require('./user');

module.exports = {
  signup, homePageC, login, logout,
};
