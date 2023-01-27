const express = require('express');
require('dotenv').config();

const controllers = require('./controllers');

const router = express.Router();

router.get('/products/:product_id', controllers.products.getProductByID);

router.get('/reviews/meta', controllers.reviews.getReviewMetaData);

router.get('/products/:product_id/related', controllers.products.getRelatedProductIDs);

router.get('/reviews', controllers.reviews.getReviewsByProduct);

router.post('/reviews', controllers.reviews.addReview);

router.post('/interactions', controllers.interactions.addInteraction);

router.put('/reviews/:review_id/helpful', controllers.reviews.setHelpfulReview);

router.put('/reviews/:review_id/report', controllers.reviews.reportReview);

module.exports = router;
