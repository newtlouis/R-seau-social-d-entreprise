const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log('auth');

    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, 'JWT_RANDOM_KEY', (err, decoded) => {
        if (err) {res.status(400).json({meassage : "requête non authentifiée " + err})}
        req.userId = decoded.userId;
        next()
    });
}