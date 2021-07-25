const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts');

router.post('/new/',postCtrl.newPost);
router.get('/all/',postCtrl.getAllPosts);
router.get('/:id/',postCtrl.getOnePost);
router.put('/:id/',postCtrl.updatePost);
router.delete('/:id/',postCtrl.deletePost);

module.exports = router;
