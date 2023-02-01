import React, { useState } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

export default function ReviewList({
  reviews, update, onChange, sort, selectedRatings,
}) {
  const [displayedReviews, setDisplayedReviews] = useState(2);

  // filter reviews based on user selected state
  let filteredReviews;
  const filterReviewsByStar = () => {
    filteredReviews = reviews.results.filter((review) => !!selectedRatings[review.rating]);
  };
  filterReviewsByStar();

  // render 2 reviews at a time
  const render = [];
  for (let i = 0; i < displayedReviews; i += 1) {
    render.push(filteredReviews[i]);
  }

  const handleMoreReviews = () => {
    const totalNumberReviews = filteredReviews.length;
    // if rendered reviews is only 1 lower, add one, otherwise add the normal 2
    if (displayedReviews + 2 > totalNumberReviews) {
      setDisplayedReviews(displayedReviews + 1);
    } else if (totalNumberReviews - displayedReviews >= 2) {
      setDisplayedReviews(displayedReviews + 2);
    }
  };

  // increments a review's helpfulness
  const handleHelpfulClick = (event, review) => {
    event.preventDefault();
    axios.put(`/api/reviews/${review.review_id}/helpful`, review)
      .then(() => update())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <p>sorted by: </p>
        <select value={sort} onChange={onChange}>
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      <ul className="review-list">
        {render.map((review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
            handleHelpfulClick={handleHelpfulClick}
          />
        ))}
      </ul>
      {filteredReviews.length > 2 && displayedReviews !== filteredReviews.length
        ? <button type="button" onClick={handleMoreReviews}>More Reviews</button>
        : null}
    </div>
  );
}
