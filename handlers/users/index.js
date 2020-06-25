//const User = require('./User');
const jwt = require('../../utils/jwt');
const {cookie} = require('../../config/config');

module.exports = {
    get: {
        login(req, res, next){
            res.render('users/login.hbs')
        },

        register(req, res, next){
            res.render('users/register.hbs');
        }

    },
    post: {

    }
}