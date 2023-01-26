const express = require('express');
const controllers = require('./controllers')
const router = express.Router();
require('dotenv').config();
const axios = require('axios');


router.get('/products/:product_id', controllers.products.getProductByID)

module.exports = router;



