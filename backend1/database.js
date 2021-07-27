const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'foo',
    password: 'bar',
    database: 'groupomania'
  });

// Connexion à la BDD
db.connect(function(err) {

    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  
  });
  
  module.exports = db;