const User = require('../users/User');
const {validationResult} = require('express-validator');
const Tripp = require('./Tripp');

module.exports = {
    get: {
        sharedTripps(req, res, next) {
            res.render('tripps/shared-tripps.hbs', {
                isLoggedIn: req.user !== undefined,
                userEmail: req.user ? req.user.email : ''
            });
        },

        offerTripp(req, res, next) {
            res.render('tripps/offer-tripp.hbs', {
                isLoggedIn: req.user !== undefined,
                userEmail: req.user ? req.user.email : ''
            });
        }
    },

    post: {
        offerTripp(req, res, next) {
            const { directions, dateTime, carImage, seats, description} = req.body;

            const [startPoint, endPoint] = directions.split(' - ');
            const[date, time]= dateTime.split(' - ')
            
             Tripp.create({startPoint, endPoint, date, time, carImage, seats, description}).then((createdTripp)=>{
                 res.redirect('/tripp/shared-tripps')
             })
        }
    }

}
