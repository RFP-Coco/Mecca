const express = require('express');
require('dotenv').config();

const controllers = require('./controllers');

const router = express.Router();

router.get('/products/:product_id', controllers.products.getProductByID);

router.get('/products/:product_id/styles', controllers.products.getProductStylesByID);

router.get('/products/:product_id/related', controllers.products.getRelatedProductIDs);

router.get('/reviews/meta', controllers.reviews.getReviewMetaData);

router.get('/reviews', controllers.reviews.getReviewsByProduct);

router.post('/reviews', controllers.reviews.addReview);

router.put('/reviews/:review_id/helpful', controllers.reviews.setHelpfulReview);

router.put('/reviews/:review_id/report', controllers.reviews.reportReview);

router.get('/cart', controllers.cart.getCart);

router.post('/cart', controllers.cart.addToCart);

router.post('/interactions', controllers.interactions.addInteraction);

module.exports = router;
