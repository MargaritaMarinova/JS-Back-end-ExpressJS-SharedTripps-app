const router = require('express').Router();
const handler = require('../handlers/users');

 router.get('/login', handler.get.login);
 router.get('/register', handler.get.register);

module.exports = router;