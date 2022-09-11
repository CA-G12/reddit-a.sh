const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { loginSchema } = require('../../validation');
const { userByEmail } = require('../../database/queries');
require('dotenv').config();

const login = (req, res) => {
  const { email, password } = req.body;
  let firstname = '';
  let id = '';
  let lastname = '';

  const { error } = loginSchema.validate(req.body, { abortEarly: false });

  if (error) {
    res.json({ result: 'Email or Password are invalid' });
  } else {
    userByEmail(email)
      .then((data) => {
        firstname = data.rows[0].firstname;
        lastname = data.rows[0].lastname;
        id = data.rows[0].id;
        bcrypt.compare(password, data.rows[0].password);
      })
      .then((result) => {
        if (result === 'false') res.json({ result: 'Pleas, check your password' });
        else {
          sign({
            email, firstname, lastname, id,
          }, process.env.SECRET_KEY, { algorithm: 'HS256' }, (err, token) => {
            if (err) res.send(err);
            else {
              res.cookie('token', token).redirect('/user/homepage');
            }
          });
        }
      })
      .catch(() => res.json({ err: 'enter valid email or password' }));
  }
};

module.exports = login;
