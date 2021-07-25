// Création d'un post
exports.newPost = (req,res,next) => {
    res.status(200).json({ message: 'new post' });
}

exports.getAllPosts = (req,res,next) => {
    res.status(200).json({ message: 'tous les posts' });
}

exports.getOnePost = (req,res,next) => {
    res.status(200).json({ message: 'post' });
}

exports.updatePost = (req,res,next) => {
    res.status(200).json({ message: 'post modifié' });
}

exports.deletePost = (req,res,next) => {
    res.status(200).json({ message: 'post supprimé' });
}