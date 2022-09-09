const connection = require('../../config/connection');

const insertUser = (username, email, firstname, lastname, password, img) => connection.query(
  'INSERT INTO users (username, email, firstname, lastname, _password, img, created) values ($1, $2, $3, $4, $5, $6, now()) returning *',
  [username, email, firstname, lastname, password, img],
);

module.exports = insertUser;
