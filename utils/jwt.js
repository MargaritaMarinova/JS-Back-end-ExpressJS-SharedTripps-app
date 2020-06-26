const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');

//TODO

module.exports = {
    createToken(data) {
        return jwt.sign({id: data._id}, secret, {expiresIn: '1h'})
    },

    verifyToken(token) {

    }
}; 