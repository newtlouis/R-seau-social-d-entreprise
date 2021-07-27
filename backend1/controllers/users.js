const bcrypt = require("bcrypt");
const db = require("../database");
const jwt = require("jsonwebtoken");


// Création d'un user
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
        console.log(user);
        db.query('INSERT INTO user SET ?', user, (err,result) => {
            if (err) { res.status(400).json({message : "Erreur dans l'insertion de la bd du nouveau user:" + err})}
            res.status(201).json({message: "Utilisateur créé"}) 
        })
        .catch(error => res.status(500).json({ message: "erreur dans le hashage:" + error }));    
    })

    
    // res.status(200).json({ message: 'new user' });
}

exports.login = (req,res,next) => {

    db.query('SELECT * FROM user WHERE email = ?',req.body.email, (err, result) => {
        if (result === "" || result == undefined) return res.status(401).json({ error: "Utilisateur introuvable" });

        bcrypt.compare(req.body.password, result[0].password)
        .then((valid) => {if (!valid) {res.status(400).json({message:"mot de passe incorrect"})}});

        const token = jwt.sign({userId : result[0].id_user, name : result[0].name},
                             'JWT_RANDOM_KEY', 
                             {expiresIn: "24h"});

        res.status(200).json({token, userId : result[0].id_user, name : result[0].name})
    })



    // res.status(200).json({ message: 'user connected' });
}
