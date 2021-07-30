const db = require("../database");

// Création d'un post
exports.newComment = (req,res,next) => {
    const date = new Date();
    let min = date.getMinutes(); 
    let hour = date.getHours();
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let month = (date.getMonth()+1) < 10 ? "0" +(date.getMonth()+1) : (date.getMonth()+1);
    let year = date.getFullYear();

    const Comment = {
        id_user : req.id_user,
        id_post : req.params.id,
        comment : req.body.comment,
        date_comment : year + "-" + month + "-" + day + "-" + hour + "-" + min
    };

    db.query('INSERT INTO comment SET ?', Comment, (err, result) => {
        if (err) return res.status(400).json({error : err});
        return res.status(201).json({ message : "commentaire enregistré dans la base de donnée"})
    })

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