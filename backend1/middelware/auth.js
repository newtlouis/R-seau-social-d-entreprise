const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    console.log(token);

    jwt.verify(token, 'JWT_RANDOM_KEY', (err, decoded) => {
        if (err) {res.status(400).json({meassage : "requête non authentifiée " + err})}
        console.log(decoded.userId);
        req.userId = decoded.userId;
        next()
    });
}