import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ReviewModalContent from './ReviewModalContent.jsx';

export default function ReviewModal({ setShowModal }) {
  const portal = document.getElementById('modal');
  return createPortal(<div
    className="review-comp-container"
  >
    <div
      className="review-modal-overlay"
      onClick={() => setShowModal(false)}
    />
    <ReviewModalContent setShowModal={setShowModal} />
  </div>, portal)
}
