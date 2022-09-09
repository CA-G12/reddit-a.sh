const router = require('express').Router();
const { signup, homePageC } = require('../controllers');

// router.get('/test', (req, res) => {
//   res.json('Hello from users/test');
// });

router.get('/homepage', homePageC);
router.post('/signup', signup);

module.exports = router;
