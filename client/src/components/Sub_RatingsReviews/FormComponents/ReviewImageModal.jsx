import React from 'react';
import { createPortal } from 'react-dom';
import ReviewImageModalContent from './ReviewImageModalContent.jsx';

export default function ReviewImageModal({ setShowImgModal }) {
  const portal = document.getElementById('modal');
  const modal = (
    <div className="review-comp-container">
      <div
        className="review-modal-overlay"
        onClick={() => setShowImgModal(false)}
      >
        <ReviewImageModalContent />
      </div>
    </div>
  );
  return createPortal(modal, portal);
}
