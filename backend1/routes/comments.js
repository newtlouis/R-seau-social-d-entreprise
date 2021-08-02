const express = require('express');
const router = express.Router();
const auth = require('../middelware/auth');


const commentCtrl = require('../controllers/comments');

router.post('/new/',auth, commentCtrl.newComment);
router.get('/:postId',auth,commentCtrl.getAllCommentsForOnePost);
router.put('/:id/',commentCtrl.updateComment);
router.delete('/:id/',commentCtrl.deleteComment);

module.exports = router;
