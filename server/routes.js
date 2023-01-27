const express = require('express');
require('dotenv').config();

const controllers = require('./controllers');

const router = express.Router();

router.get('/products/:product_id', controllers.products.getProductByID);

router.get('/products/:product_id/styles', controllers.products.getProductStylesByID);

router.get('/products/:product_id/related', controllers.products.getRelatedProductIDs);

router.get('/reviews', controllers.reviews.getReviewsByProduct);

router.get('/reviews/meta', controllers.reviews.getReviewMetaData);

router.post('/reviews', controllers.reviews.addReview);

router.post('/interactions', controllers.interactions.addInteraction);

router.put('/reviews/:review_id/helpful', controllers.reviews.setHelpfulReview);
router.get('/reviews/meta', controllers.reviews.getReviewMetaData);

router.put('/reviews/:review_id/report', controllers.reviews.reportReview);

module.exports = router;
