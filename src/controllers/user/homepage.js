const { verify } = require('jsonwebtoken');
require('dotenv').config();

const homePageC = (req, res) => {
  verify(req.cookies.token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.sendStatus(401);
    } else {
      res.send(decoded);
    }
  });
};

module.exports = homePageC;
