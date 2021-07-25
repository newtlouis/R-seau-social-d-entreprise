// Création d'un post
exports.newComment = (req,res,next) => {
    res.status(200).json({ message: 'new comment' });
}

exports.getAllComments = (req,res,next) => {
    res.status(200).json({ message: 'tous les comments' });
}

exports.updateComment = (req,res,next) => {
    res.status(200).json({ message: 'comment modifié' });
}

exports.deleteComment = (req,res,next) => {
    res.status(200).json({ message: 'comment supprimé' });
}