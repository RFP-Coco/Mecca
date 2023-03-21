import React from "react";
import { createPortal } from "react-dom";
import ReviewImageModalContent from "./ReviewImageModalContent.jsx";

export default function ReviewImageModal({
  setShowImgModal,
  reviewBody,
  setReviewBody,
}) {
  const portal = document.getElementById("modal");
  const modal = (
    <div className="review-comp-container">
      <div className="review-modal-overlay">
        <ReviewImageModalContent
          setShowImgModal={setShowImgModal}
          reviewBody={reviewBody}
          setReviewBody={setReviewBody}
        />
      </div>
    </div>
  );
  return createPortal(modal, portal);
}
