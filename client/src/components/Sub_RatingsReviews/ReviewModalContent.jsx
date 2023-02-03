import React from 'react';
import generateStars from './generateStars.js';

export default function ReviewModalContent({ setShowModal }) {
  return (
    <form className="review-modal-container">
      <div className="return-btn-container">
        <button className="" onClick={() => setShowModal(false)} type="button">X</button>
      </div>
      <div className="review-modal-header">
        Write Your Review
      </div>

    </form>
  );
}