const express = require('express');
const controllers = require('./controllers');

const router = express.Router();
require('dotenv').config();

router.get('/products/:product_id', controllers.products.getProductByID);

router.get('/reviews/meta', controllers.reviews.getReviewMetaData);

router.get('/reviews', controllers.reviews.getReviewsByProduct);


router.get('/products/:product_id', controllers.products.getProductByID)

router.get('/reviews/meta', controllers.reviews.getReviewMetaData)

module.exports = router;
