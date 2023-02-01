import React from 'react';

export default function RatingBreakdown({
  reviewMetadata, totalAmtOfReviews, toggleSelectedRating,
}) {
  const progress = Object.entries(reviewMetadata.ratings)
    .map((entry) => [entry[0], entry[1] / totalAmtOfReviews, entry[1]]);

  return (
    <div className="rating-breakdown">
      {progress.map((entry) => {
        const percentage = Math.round(entry[1] * 100);
        return (
          <div
            key={entry[0]}
            className="rating-container"
            onClick={() => toggleSelectedRating(entry[0])}
          >
            <div className="rating-bar-label">{entry[0]} stars:</div>
            <progress
              className="rating-bar"
              max="100"
              value={percentage}
            />
            <div className="rating-amt">{entry[2]}</div>
          </div>
        );
      })}
    </div>
  );
}
