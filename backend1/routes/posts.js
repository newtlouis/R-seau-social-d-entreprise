const express = require('express');
const router = express.Router();

const auth = require('../middelware/auth');

const postCtrl = require('../controllers/posts');

router.post('/new/',auth,postCtrl.newPost);
router.get('/all/',auth, postCtrl.getAllPosts);
router.get('/:id/',auth, postCtrl.getOnePost);
router.put('/:id/',auth, postCtrl.updatePost);
router.delete('/:id/',auth, postCtrl.deletePost);

module.exports = router;
