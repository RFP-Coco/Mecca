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

router.get('/qa/questions', controllers.questions.getAllQuestionsByProductId);

router.get('/qa/questions/:question_id/answers', controllers.questions.getAnswersByQuestionId);

router.post('/qa/questions/', controllers.questions.addQuestionById);

router.post('/qa/questions/:question_id/answers', controllers.questions.addAnswerById);

router.put('/qa/questions/:question_id/helpful', controllers.questions.updateQuestionHelpful);

router.put('/qa/questions/:question_id/report', controllers.questions.handleQuestionReport);

router.put('/qa/answers/:answer_id/helpful', controllers.questions.updateAnswerHelpful);

router.put('/qa/answers/:answer_id/report', controllers.questions.handleAnswerReport);

module.exports = router;
