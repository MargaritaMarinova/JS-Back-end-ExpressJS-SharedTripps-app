//const User = require('./User');
const jwt = require('../../utils/jwt');
const {cookie} = require('../../config/config');
const User = require('./User');

module.exports = {
    get: {
        login(req, res, next) {
            res.render('users/login.hbs')
        },

        register(req, res, next) {
            res.render('users/register.hbs');
        }

    },
    post: {
        login(req, res, next ) {
            const {email, password} = req.body;

            User.findOne({email})
            .then((user)=> {
                return user.passwordsMatch(password)
            }).then((result)=> console.log(result));
        },

        register(req, res, next) {
            const {
                email,
                password,
                rePassword
            } = req.body;

            User.create({
                    email,
                    password
                })
                .then((createdUser) => {
                    console.log(createdUser)
                    res.redirect('/user/login')
                })
        }

    }
}