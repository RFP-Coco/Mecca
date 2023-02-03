import React from 'react';

export default function ReviewModalContent({ setShowModal }) {
  return (
    <form className="review-modal-container">
      <div className="return-btn-container">
        <button className="" onClick={() => setShowModal(false)} type="button">X</button>
      </div>
    </form>
  );
}