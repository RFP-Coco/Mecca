import React, { useState } from 'react';
import ImageSlide from './Sub_ImageGallery/ImageSlide.jsx';
import DefaultView from './Sub_ImageGallery/DefaultView.jsx';

function ImageGallery({ currentStyle }) {
  // console.log('SHOW CURRENT STYLE: ', currentStyle);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="image-gallery">
      <ImageSlide
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <DefaultView
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
}
export default ImageGallery;
