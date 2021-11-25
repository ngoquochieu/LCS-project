const express = require('express');
const router = express.Router();
const actionController = require('../app/controllers/ActionController');
const validateCookie = require('../app/middleware/ValidateCookie');
const author = require('../app/middleware/Author')

router.get('/login', actionController.action);
router.post('/login', actionController.login);
router.post('/signup', actionController.signup);
router.post('/logout', actionController.logout);
module.exports = router;
