import React, { useState } from 'react';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

export default function ReviewList({
  reviews,
  update,
  onChange,
  sort,
  selectedRatings,
  filtered,
  setShowModal,
  totalAmtOfReviews,
}) {
  const [displayedReviews, setDisplayedReviews] = useState(2);

  // increments a review's helpfulness
  const handleHelpfulClick = (event, review) => {
    event.preventDefault();
    axios.put(`/api/reviews/${review.review_id}/helpful`, review)
      .then(() => update())
      .catch((err) => console.log(err));
  };

  // filtering logic
  const mappedFilter = () => {
    const filteredReviews = reviews.results.filter((review) => !!selectedRatings[review.rating]);
    if (filteredReviews.length === 0) {
      return reviews.results
        .slice(0, displayedReviews)
        .map((review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
            handleHelpfulClick={handleHelpfulClick}
          />
        ));
    }
    return reviews.results
      .filter((review) => !!selectedRatings[review.rating])
      .slice(0, displayedReviews)
      .map((review) => (
        <ReviewTile
          key={review.review_id}
          review={review}
          handleHelpfulClick={handleHelpfulClick}
        />
      ));
  };

  // display button logic
  const displayButton = () => {
    if (filtered === true
      && displayedReviews <= reviews.results
        .filter((review) => !!selectedRatings[review.rating]).length) {
      return <button aria-label="render more reviews" type="button" onClick={handleMoreReviews}>More Reviews</button>;
    } if (filtered === false
      && displayedReviews <= reviews.results.length) {
      return <button aria-label="render more reviews" type="button" onClick={handleMoreReviews}>More Reviews</button>;
    }
    return null;
  };

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
    <div className="review-list-container">
      <div>
        <span className="sort-container">{totalAmtOfReviews} reviews,&nbsp;<p>sorted by:</p>
          <select aria-label="choose sorting algorithm" value={sort} onChange={onChange}>
            <option value="relevant">relevance</option>
            <option value="helpful">helpfulness</option>
            <option value="newest">newest</option>
          </select>
        </span>
      </div>
      <ul aria-label="product reviews" className="review-list">
        {filtered === true
          ? mappedFilter()
          : reviews.results
            .slice(0, displayedReviews)
            .map((review) => (
              <ReviewTile
                key={review.review_id}
                review={review}
                handleHelpfulClick={handleHelpfulClick}
              />
            ))}
      </ul>
      <div className="review-list-btns">
        {displayButton()}
        <button aria-label="add review" type="button" onClick={() => setShowModal(true)}>Add a review</button>
      </div>
    </div>
  );
}
