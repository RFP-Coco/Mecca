import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

export default function ReviewList({
  reviews, update, onChange, sort, selectedRatings,
}) {
  const [displayedReviews, setDisplayedReviews] = useState(2);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filteredReviews = reviews.results.filter((review) => !!selectedRatings[review.rating]);
    if (filteredReviews.length === 0) setFiltered(reviews.results);
    else setFiltered(filteredReviews);
  }, [selectedRatings]);

  const handleMoreReviews = () => {
    const totalNumberReviews = filtered.length;
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
        {filtered.length !== 0
          ? filtered.slice(0, displayedReviews).map((review) => (
            <ReviewTile
              key={review.review_id}
              review={review}
              handleHelpfulClick={handleHelpfulClick}
            />
          ))
          : reviews.results.slice(0, displayedReviews).map((review) => (
            <ReviewTile
              key={review.review_id}
              review={review}
              handleHelpfulClick={handleHelpfulClick}
            />
          ))}
      </ul>
      {reviews.results.length > 2 && displayedReviews <= filtered.length
        ? <button type="button" onClick={handleMoreReviews}>More Reviews</button>
        : null}
    </div>
  );
}
