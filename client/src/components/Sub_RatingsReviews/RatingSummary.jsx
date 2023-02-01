import React, { useState, useEffect } from 'react';

export default function RatingSummary({
  reviewMetadata, totalAmtOfReviews, avgStarRating,
}) {
  return (
    <div className="rating-summary">
      <div className="stars">STARS WOULD GO HERE... IF I HAD THEM</div>
      <div className="total-reviews">{totalAmtOfReviews} reviews</div>
      <h2 className="star-rating">{avgStarRating}</h2>
    </div>
  );
}
