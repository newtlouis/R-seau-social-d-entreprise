// Création d'un post
exports.signUp = (req,res,next) => {
    res.status(200).json({ message: 'new user' });
}

exports.login = (req,res,next) => {
    res.status(200).json({ message: 'user connected' });
}
