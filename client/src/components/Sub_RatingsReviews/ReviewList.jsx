import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';

export default function ReviewList({ reviews, reviewMetadata }) {
  const [displayedReviews, setDisplayedReviews] = useState(2);

  const render = [];
  for (let i = 0; i < displayedReviews; i += 1) {
    render.push(reviews.results[i]);
  }

  const handleMoreReviews = () => {
    const totalNumberReviews = reviews.results.length;
    // if rendered reviews is only 1 lower, add one, otherwise add the normal 2
    if (displayedReviews + 2 > totalNumberReviews) {
      setDisplayedReviews(displayedReviews + 1);
    } else if (totalNumberReviews - displayedReviews >= 2) {
      setDisplayedReviews(displayedReviews + 2);
    }
  };

  return (
    <div>
      <ul className="review-list">
        {render.map((review) => <ReviewTile reviewMetadata={reviewMetadata} review={review} />)}
      </ul>
      {reviews.results.length > 2 && displayedReviews !== reviews.results.length
        ? <button type="button" onClick={handleMoreReviews}>More Reviews</button>
        : null}
    </div>
  );
}
