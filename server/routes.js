require('dotenv').config();
const express = require('express');
const controllers = require('./controllers')
const router = express.Router();
const axios = require('axios');


router.get('/products/:product_id', controllers.products.getProductByID)

router.get('/reviews/meta', controllers.reviews.getReviewMetaData)

router.get('/products/:product_id/related', controllers.products.getRelatedProductIDs)

router.post('/interactions', controllers.interactions.addInteraction)

module.exports = router;
