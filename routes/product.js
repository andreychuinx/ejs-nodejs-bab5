const express = require('express')
const router = express.Router()
const path = require('path');
const productsController = require('../controller/products')

router.get('/shop', productsController.shop)

router.get('/add-product', productsController.getProduct)

router.post('/product', productsController.postProduct)


module.exports = router;