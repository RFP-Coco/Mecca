import React, { useState, useEffect } from 'react';
import '../../../dist/assets/ratings/star.svg';
import Star from './Star.jsx';
import generateStars from './generateStars.js';

export default function RatingSummary({
  totalAmtOfReviews, avgStarRating,
}) {
  // function takes in an integer and splits it into an array that's mappable to generate stars
  // size in px

  return (
    <div className="rating-summary">
      <h2 className="star-rating">
        {avgStarRating}
      </h2>
      <div className="stars">
        {avgStarRating !== null
        && generateStars(avgStarRating, 5, 30)}
      </div>
      <div className="total-reviews">{totalAmtOfReviews} reviews</div>
    </div>
  );
}
