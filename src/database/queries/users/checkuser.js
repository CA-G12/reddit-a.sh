const connection = require('../../config/connection');

const checkIfUserExist = (email, username) => connection.query('select count(*) from users where email = $1 or username = $2', [email, username]);
module.exports = checkIfUserExist;
