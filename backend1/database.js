const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Groupomania'
});

// Connexion à la BDD
db.connect(function(err) {

    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  
  });
  
  module.exports = db;