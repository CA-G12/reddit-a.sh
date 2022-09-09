const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { signupSchema } = require('../../validation');
require('dotenv').config();
const { checkIfUserExist, insertUser } = require('../../database/queries');

const signup = (req, res) => {
  const {
    username, email, firstname, lastname, password, img,
  } = req.body;

  const { error } = signupSchema.validate(req.body, { abortEarly: false });

  if (error) {
    res.send({ error: error.message, state: 'fail' });
  } else {
    checkIfUserExist(email, username)
      .then((data) => {
        if (data.rows[0].count !== '0') {
          res.send({ error: 'user already exist' });
        } else {
          bcrypt.genSalt(10)
            .then((salt) => bcrypt.hash(password, salt))
            .then((hash) => insertUser(username, email, firstname, lastname, hash, img))
            .then(() => sign({ email, password }, process.env.SECRET_KEY, { algorithm: 'HS256' }))
            .then((token) => res.cookie('token', token).redirect('/user/homepage'));
        }
      })
      .catch((err) => res.send(err));
  }
};

module.exports = signup;
