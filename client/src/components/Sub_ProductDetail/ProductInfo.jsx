/* eslint-disable react/no-array-index-key */
import React from 'react';
import SocialMediaShare from './Sub_ProductInfo/SocialMediaShare.jsx';
import generateStars from '../Sub_RatingsReviews/generateStars.js';

function ProductInfo({ product, reviewMetadata }) {
  const { ratings } = reviewMetadata;
  const totalStars = Object.entries(ratings).reduce((
    (a, b) => a + Number(b[0]) * Number(b[1])), 0);
  const totalVotes = Object.entries(ratings).reduce((
    (a, b) => a + Number(b[1])), 0);
  const avgStarRating = totalStars / totalVotes;

  return (
    <div className="product-info">
      <div className="stars-container">
        <span className="stars">
          {avgStarRating !== null
            && generateStars(avgStarRating, 5, 20)}
        </span>
        <span>Read {totalVotes} reviews</span>
      </div>
      <p>Category {'>'} {product.category}</p>
      <h1>{product.name}</h1>
      <p>{product.slogan}</p>
      <p>{product.description}</p>
      <p>Feature: </p>
      {product.features.map(
        (feature, index) => <p key={index}>{feature.feature} : {feature.value}</p>,
      )}
      <SocialMediaShare product={product} />
    </div>
  );
}

export default ProductInfo;
