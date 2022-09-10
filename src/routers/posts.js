const router = require('express').Router();
const {
  createPost, allPosts, userPosts, deletePost,
} = require('../controllers');

router.get('/', allPosts);
router.get('/userPosts/:id', userPosts);
router.post('/addPost', createPost);
router.delete('/deletePost/:id', deletePost);

module.exports = router;
