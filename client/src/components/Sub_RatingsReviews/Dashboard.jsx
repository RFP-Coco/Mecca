import React from 'react';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductDashboard from './ProductDashboard.jsx';

export default function Dashboard({
  reviews,
  reviewMetadata,
  toggleSelectedRating,
  selectedRatings,
  clear,
  totalStarRating,
  totalAmtOfReviews,
}) {
  const avgStarRating = Math.round((totalStarRating / totalAmtOfReviews) * 10) / 10;

  return (
    <div className="review-dashboard">
      <RatingSummary
        reviewMetadata={reviewMetadata}
        totalAmtOfReviews={totalAmtOfReviews}
        avgStarRating={avgStarRating}
      />
      <RatingBreakdown
        clear={clear}
        selectedRatings={selectedRatings}
        toggleSelectedRating={toggleSelectedRating}
        reviews={reviews}
        reviewMetadata={reviewMetadata}
        totalAmtOfReviews={totalAmtOfReviews}
        avgStarRating={avgStarRating}
      />
      <ProductDashboard reviewMetadata={reviewMetadata} />
    </div>
  );
}
