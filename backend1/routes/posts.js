const express = require('express');
const router = express.Router();

const auth = require('../middelware/auth');
const multer = require('../middelware/multer-config');

const postCtrl = require('../controllers/posts');


router.post('/new/', auth, multer, postCtrl.newPost);
router.get('/all/',auth, postCtrl.getAllPosts);
router.get('/:id/',auth, postCtrl.getOnePost);
router.put('/:id/',auth, multer, postCtrl.updatePost);
router.delete('/:id/',auth, postCtrl.deletePost);

module.exports = router;
