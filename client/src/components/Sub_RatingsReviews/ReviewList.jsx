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
  }
  filterReviewsByStar();
  console.log(filteredReviews);

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
        {/* {render.map((review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
            handleHelpfulClick={handleHelpfulClick}
          />
        ))} */}
        {filteredReviews.map((review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
            handleHelpfulClick={handleHelpfulClick}
          />
        ))}
      </ul>
      {reviews.results.length > 2 && displayedReviews !== reviews.results.length
        ? <button type="button" onClick={handleMoreReviews}>More Reviews</button>
        : null}
    </div>
  );
}
