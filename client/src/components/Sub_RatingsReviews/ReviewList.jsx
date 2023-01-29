import React, { useState } from 'react';

export default function ReviewList({ reviews }) {
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
      <ul>
        {render.map((review) => <li className="reviewListEntry">{review.summary} </li>)}
      </ul>
      {reviews.results.length > 2 && displayedReviews !== reviews.results.length
        ? <button type="button" onClick={handleMoreReviews}>More Reviews</button>
        : null}
    </div>
  );
}
