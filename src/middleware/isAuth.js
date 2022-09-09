const { verify } = require('jsonwebtoken');
require('dotenv').config();

const isAuth = (req, res, next) => {
  if (!req.cookies.token) {
    res.send({ msg: 'no logged user' });
  } else {
    verify(req.cookies.token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.sendStatus(401);
      } else {
        next();
      }
    });
  }
};

module.exports = isAuth;
