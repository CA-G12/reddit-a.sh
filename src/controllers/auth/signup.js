const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { signupSchema } = require('../../validation');
require('dotenv').config();

const signup = (req, res) => {
  const { password, username, email } = req.body;
  const { error } = signupSchema.validate(req.body, { abortEarly: false });

  if (error) {
    res.send({ error: error.message, state: 'fail' });
  } else {
    // check if user in database
  // query to check
  // const userExist = '';

    // if (userExist) {
    //   res.send({ error: 'user already exist' });
    // }

    bcrypt.genSalt(10)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hash) => console.log(hash)) // add user query
      .then(() => sign({ username, email }, process.env.SECRET_KEY, { algorithm: 'HS256' }))
      .then((encodded) => res.send({ token: encodded }))
      .catch((err) => res.send(err));
  }
};

module.exports = signup;
