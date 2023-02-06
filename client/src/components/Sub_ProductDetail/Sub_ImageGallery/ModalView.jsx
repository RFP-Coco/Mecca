import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ImageSlide from './ImageSlide.jsx';
import MainImage from './MainImage.jsx';

function ModalView({
  modalClass, currentStyle, currentImageIndex, setCurrentImageIndex, showModalView, setShowModalView,
}) {
  const handleClick = () => {
    if (showModalView === 'expand') {
      setShowModalView('default');
    } else if (showModalView === 'zoom') {
      setShowModalView('expand');
    }
  };
  return (
    <div className={modalClass}>
      {showModalView !== 'zoom' && (
      <ImageSlide
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      )}

      <MainImage
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        showModalView={showModalView}
        setShowModalView={setShowModalView}
      />
      { showModalView !== 'default' && <AiOutlineClose className="close-icon" onClick={handleClick} />}

    </div>
  );
}

export default ModalView;
