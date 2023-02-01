import React, { useState, useEffect } from 'react';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

export default function Dashboard({
  reviews, reviewMetadata, toggleSelectedRating, selectedRatings,
}) {
  const totalAmtOfReviews = Object.values(reviewMetadata.ratings)
    .reduce((accumulator, currrent) => Number(currrent) + accumulator, 0);

  const totalStarRating = Object.entries(reviewMetadata.ratings)
    .map((entry) => Number(entry[0]) * Number(entry[1]))
    .reduce((accumulator, current) => accumulator + current, 0);

  const avgStarRating = Math.round((totalStarRating / totalAmtOfReviews) * 10) / 10;

  return (
    <div className="review-dashboard">
      <RatingSummary
        reviewMetadata={reviewMetadata}
        totalAmtOfReviews={totalAmtOfReviews}
        avgStarRating={avgStarRating}
      />
      <RatingBreakdown
        selectedRatings={selectedRatings}
        toggleSelectedRating={toggleSelectedRating}
        reviews={reviews}
        reviewMetadata={reviewMetadata}
        totalAmtOfReviews={totalAmtOfReviews}
        avgStarRating={avgStarRating}
      />
    </div>
  );
}
