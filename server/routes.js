const express = require('express');
const controllers = require('./controllers');

const router = express.Router();
require('dotenv').config();

router.get('/products/:product_id', controllers.products.getProductByID);

router.get('/reviews/meta', controllers.reviews.getReviewMetaData);

router.get('/reviews', controllers.reviews.getReviewsByProduct);

router.put('/reviews/:review_id/helpful', controllers.reviews.setHelpfulReview);

router.put('/reviews/:review_id/report', controllers.reviews.reportReview);

router.post('/reviews', controllers.reviews.addReview);

module.exports = router;
