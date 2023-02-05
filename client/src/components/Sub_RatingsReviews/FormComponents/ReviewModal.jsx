import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ReviewModalContent from './ReviewModalContent.jsx';
import ReviewImageModal from './ReviewImageModal.jsx';

export default function ReviewModal({
  setShowModal, product, reviewMetadata, update,
}) {
  const portal = document.getElementById('modal');
  const modal = (
    <div className="review-comp-container">
      <div
        className="review-modal-overlay"
        onClick={() => setShowModal(false)}
      />
      <ReviewModalContent
        product={product}
        setShowModal={setShowModal}
        reviewMetadata={reviewMetadata}
        update={update}
      />
    </div>
  );
  return createPortal(modal, portal);
}
