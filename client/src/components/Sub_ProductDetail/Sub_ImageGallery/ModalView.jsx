import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ImageSlide from './ImageSlide.jsx';
import MainImage from './MainImage.jsx';

function ModalView({
  modalClass, currentStyle, currentImageIndex, setCurrentImageIndex, showModalView, setShowModalView
}) {
  return (
    <div className={modalClass}>
      <ImageSlide
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <MainImage
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        showModalView={showModalView}
        setShowModalView={setShowModalView}
      />
      { showModalView !== 'default' && <AiOutlineClose className="close-icon" onClick={() => setShowModalView('default')} />}

    </div>
  );
}

export default ModalView;
