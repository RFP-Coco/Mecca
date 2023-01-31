import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sub_RatingsReviews/styles/ratings.css';
import ReviewList from './Sub_RatingsReviews/ReviewList.jsx';
import Dashboard from './Sub_RatingsReviews/Dashboard.jsx';

export default function RatingsReviews({ productID, reviewMetadata, product }) {
  const [sort, setSort] = useState('relevant');

  const [reviews, setReviews] = useState(null);

  const updateData = () => {
    const url = `/api/reviews/?product_id=${productID}&sort=${sort}&count=50`;
    axios.get(url)
      .then((results) => {
        setReviews(results.data);
      })
      .catch((err) => console.log(err));
  };

  // listens for sorting select-box change
  useEffect(() => {
    updateData();
  }, [sort]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="ratings-reviews">
      <h3>Ratings & Reviews</h3>
      {reviewMetadata
      && <Dashboard reviewMetadata={reviewMetadata} />}
      {reviews
      && reviewMetadata
      && (
      <ReviewList
        sort={sort}
        onChange={handleSortChange}
        reviewMetadata={reviewMetadata}
        reviews={reviews}
        update={updateData}
      />
      )}
    </div>
  );
}
