import React, { useState, useEffect } from 'react';

export default function RatingSummary({
  reviewMetadata,
}) {
  const totalAmtOfReviews = Object.values(reviewMetadata.ratings)
    .reduce((accumulator, currrent) => Number(currrent) + accumulator, 0);

  const totalStarRating = Object.entries(reviewMetadata.ratings)
    .map((entry) => Number(entry[0]) * Number(entry[1]))
    .reduce((accumulator, current) => accumulator + current, 0);

  const avgStarRating = Math.round((totalStarRating / totalAmtOfReviews) * 10) / 10;

  return (
    <div className="rating-summary">
      <div className="stars">STARS WOULD GO HERE... IF I HAD THEM</div>
      <div className="total-reviews">{totalAmtOfReviews} reviews</div>
      <h2 className="star-rating">{avgStarRating}</h2>
    </div>
  );
}
