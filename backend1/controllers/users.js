const { hash } = require("bcrypt");
const db = require("../database");

bcrypt = required("bcrypt");

// Création d'un post
exports.signUp = (req,res,next) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    bcrypt
    .hash(password,10)
    .then((hash) => {
        const user = {
            name : name,
            email : email,
            password : hash,
        };
        db.query('INSERT INTO user SET ?', user, (err,result) => {
            if (err) { res.statut(400).json({message : "Erreur dans l'insertion de la bd du nouveau user:" + err})}
            res.status(201).json({message: "Utilisateur créé"}) 
        })
        .catch(error => res.status(500).json({ message: "erreur dans le hashage:" + error }));    
    })

    
    // res.status(200).json({ message: 'new user' });
}

exports.login = (req,res,next) => {
    res.status(200).json({ message: 'user connected' });
}
