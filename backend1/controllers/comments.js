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
        return res.status(201).json({result})
    })

}

exports.getAllCommentsForOnePost = (req,res,next) => {
    const idPost = req.params.idPost;
    db.query('SELECT comment.content, comment.date_creation, user.name FROM comment INNER JOIN user ON comment.id_user = user.id_user LEFT JOIN post ON comment.id_post = post.id WHERE post.id_post = ? ', idPost, (err, result) => {
        if (err) {return res.status(400).json({error : err})};
        return res.status(200).json({result})
    })
}

exports.updateComment = (req,res,next)=>  {
    db.query('UPDATE comment SET comment = ? ', req.body.comment, (err, result) => {
        if (err) return res.status(400).json({error : err});
        return res.status(201).json({result})
    })
}

exports.deleteComment = (req,res,next) => {
    db.query('DELETE FROM comment WHERE id = ?', req.params.id, (err, result) => {
        if (err) return res.status(400).json({error : err});
        return res.status(201).json({result})
    })
}