import React, { useState, useEffect } from 'react';
import axios from 'axios';
import generateStars from './generateStars.js';

export default function ReviewModalContent({ setShowModal, product }) {
  console.log(product, 'product');
  const [starsFilled, setStarsFilled] = useState(0);
  const [starInfo, setStarInfo] = useState({
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  });

  const [reviewBody, setReviewBody] = useState({
    product_id: product.id,
    rating: 0,
    summary: '',
    reccomend: false,
    body: '',
    name: '',
    email: '',
    photos: [],
    characteristics: {},
  });

  const handleStarClick = (rating) => {
    setStarsFilled(rating);
    setReviewBody({
      ...reviewBody,
      rating,
    });
  };

  return (
    <form className="review-modal-container">
      <div className="return-btn-container">
        <button className="" onClick={() => setShowModal(false)} type="button">X</button>
      </div>
      <div className="review-modal-header">
        Write Your Review
      </div>
      <span>{product.name}</span>
      <div>OVERALL RATING:
        <div className="overall-rating">
          {reviewBody.rating === 0
            ? (
              <span className="form-stars">
                <div onClick={() => handleStarClick(1)}>{generateStars(0, 1)}</div>
                <div onClick={() => handleStarClick(2)}>{generateStars(0, 1)}</div>
                <div onClick={() => handleStarClick(3)}>{generateStars(0, 1)}</div>
                <div onClick={() => handleStarClick(4)}>{generateStars(0, 1)}</div>
                <div onClick={() => handleStarClick(5)}>{generateStars(0, 1)}</div>
              </span>
            )
            : (
              <span className="form-stars">
                {generateStars(reviewBody.rating)}
                <span>{starInfo[reviewBody.rating]}</span>
              </span>
            )}
        </div>
      </div>
    </form>
  );
}
