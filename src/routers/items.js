const express = require('express');
const router = express.Router();

const itemsController = require('../app/controllers/ItemsController');

router.get('/:type/details/:product_code', itemsController.detailsItems);
router.get('/:type', itemsController.showItemsOfCate);

module.exports = router;
