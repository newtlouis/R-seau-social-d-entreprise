// Ajout "d'express" => Infrastructure d'applications web Node.js minimaliste et flexible
const express = require('express');

// Création d'une application express
const app = express();

// Ajout de "bodyParser" => Parse les corps de requête entrants dans un middleware 
const bodyParser = require('body-parser');

// Ajout de "helmet" => Permet de sécuriser des applications Express en définissant divers en-têtes HTTP
const helmet = require('helmet');

// Système de sécurité CORS
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
    
  });

  // Transformation des données en un objet JSON
app.use(bodyParser.json());

// Activation du système de protection helmet
app.use(helmet());


// Importation des routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const commentsRoute = require('./routes/comments');

app.use('/api/posts',postsRoute);
app.use('/api/auth',usersRoute);
app.use('/api/comments',commentsRoute);

// app.use('/api/loulou',(req, res, next) => {
//     res.status(201).json({ message: 'Votre requête a bien été reçue !' });
//     console.log('Requête reçue !');
    
//   });
  
//   app.use((req, res, next) => {
//     res.status(201);
//     next();
//   });
  
//   app.use((req, res, next) => {
//     res.json({ message: 'Votre requête a bien été reçue !' });
//     next();
//   });
  
//   app.use((req, res, next) => {
//     console.log('Réponse envoyée avec succès !');
//   });

module.exports = app;