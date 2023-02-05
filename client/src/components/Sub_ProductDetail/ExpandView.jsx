import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ImageSlide from './Sub_ImageGallery/ImageSlide.jsx';
import MainImage from './Sub_ImageGallery/MainImage.jsx';

function ExpandView({ currentStyle, productID, setShowExpandView }) {
  return (
    <div className="expand-view">

      <AiOutlineClose className="close-icon" onClick={() => setShowExpandView(false)} />
    </div>
  );
}

export default ExpandView;
