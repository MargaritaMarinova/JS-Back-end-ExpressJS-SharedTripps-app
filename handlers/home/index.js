const Tripps = require('../tripps');

module.exports = {
    get: {
        home(req, res, next) {
            res.render('home.hbs');
        }
    },
    post: {

    }
};