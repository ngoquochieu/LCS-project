const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');
const itemsController = require('../app/controllers/ItemsController');
const isAuthor = require('../app/middleware/Author');
router.get('/', homeController.index);

module.exports = router;
