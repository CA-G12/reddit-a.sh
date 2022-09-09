const router = require('express').Router();
const { signup } = require('../controllers');

router.get('/test', (req, res) => {
  res.json('Hello from users/test');
});

router.post('/signup', signup);

module.exports = router;
