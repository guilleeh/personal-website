const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    //Get Token from header
    const token = req.header('x-auth-token');

    //Check if token does not exist
    if (!token) {
        return res.status(401).json({ msg: 'Token not found, access denied.' });
    }
    try {
        const decode = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Invalid token.' });
    }
};
