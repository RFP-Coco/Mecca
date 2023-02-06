import React from 'react';
import { createPortal } from 'react-dom';

export default function ThumbnailModal({
  expand, imgUrl, setCurrImg,
}) {
  const portal = document.getElementById('modal');
  const modal = (
    <div className="review-comp-container" id="expanded-image-modal">
      <div
        className="review-modal-overlay"
        onClick={() => { expand(false); setCurrImg(''); }}
      />
      <img
        // className="expanded-thumbnail"
        className="review-modal-container"
        onClick={() => { expand(false); setCurrImg(''); }}
        src={imgUrl}
        alt="expanded pic"
      />
    </div>
  );
  return createPortal(modal, portal);
}
