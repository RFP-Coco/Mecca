/* eslint-disable react/no-array-index-key */
import React from 'react';
import generateStars from '../Sub_RatingsReviews/generateStars.js';

function ProductInfo({ product, reviewMetadata, reviewRef }) {
  const { ratings } = reviewMetadata;
  const totalStars = Object.entries(ratings).reduce((
    (a, b) => a + Number(b[0]) * Number(b[1])), 0);
  const totalVotes = Object.entries(ratings).reduce((
    (a, b) => a + Number(b[1])), 0);
  const avgStarRating = totalStars / totalVotes;

  const handleClick = () => {
    reviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="product-info">
      <div className="stars-container">
        <span className="stars">
          {avgStarRating !== null
            && generateStars(avgStarRating, 5, 20)}
        </span>
        <span className="link-review" onClick={handleClick}>Read all {totalVotes} reviews</span>
      </div>
      <div className="product-category">Category {'>'} {product.category}</div>
      <div className="product-name">{product.name}</div>
    </div>
  );
}

export default ProductInfo;
