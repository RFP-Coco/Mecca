const express = require('express');
const controllers = require('./controllers');

const router = express.Router();
require('dotenv').config();

router.get('/products/:product_id', controllers.products.getProductByID);
router.get('/products/:product_id/styles', controllers.products.getProductStylesByID);

router.get('/reviews/meta', controllers.reviews.getReviewMetaData);

router.get('/cart', controllers.cart.getCart);
router.post('/cart', controllers.cart.addToCart);

module.exports = router;
