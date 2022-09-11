const connection = require('../../config/connection');

const userByEmail = (email) => connection.query('SELECT id,email,firstname,lastname, _password as password FROM users WHERE email = $1', [email]);

module.exports = userByEmail;
