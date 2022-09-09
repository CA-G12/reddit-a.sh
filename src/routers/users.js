const router = require('express').Router();
const {
  signup, homePageC, login, logout,
} = require('../controllers');
const isAuth = require('../middleware');
// router.get('/test', (req, res) => {
//   res.json('Hello from users/test');
// });

router.get('/homepage', isAuth, homePageC);
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
