const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comments');

router.post('/new/',commentCtrl.newComment);
router.get('/:postId',commentCtrl.getAllCommentsForOnePost);
router.put('/:id/',commentCtrl.updateComment);
router.delete('/:id/',commentCtrl.deleteComment);

module.exports = router;
