import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ImageSlide from './ImageSlide.jsx';
import MainImage from './MainImage.jsx';

function ModalView({
  modalClass, currentStyle, currentImageIndex, setCurrentImageIndex, modalView, setModalView,
}) {
  const handleClick = () => {
    if (modalView === 'expand') {
      setModalView('default');
    } else if (modalView === 'zoom') {
      setModalView('expand');
    }
  };
  return (
    <div data-testid="modalView" className={modalClass}>
      {modalView !== 'zoom' && (
      <ImageSlide
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        modalView={modalView}
      />
      )}

      <MainImage
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        modalView={modalView}
        setModalView={setModalView}
      />
      { modalView === 'expand' && <AiOutlineClose className="close-icon" onClick={handleClick} aria-label="close expand view" />}

    </div>
  );
}

export default ModalView;
