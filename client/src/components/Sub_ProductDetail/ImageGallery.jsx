import React, { useState, useEffect } from 'react';
import ImageSlide from './Sub_ImageGallery/ImageSlide.jsx';
import DefaultView from './Sub_ImageGallery/DefaultView.jsx';

function ImageGallery({ currentStyle, productID }) {
  console.log('SHOW CURRENT STYLE: ', currentStyle);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [styleMemo, setStyleMemo] = useState({});
  const { style_id } = currentStyle;

  useEffect(() => {
    setCurrentImageIndex(0);
    setStyleMemo({});
  }, [productID]);

  useEffect(() => {
    setStyleMemo({ ...styleMemo, [style_id]: currentImageIndex });
  }, [currentImageIndex]);

  useEffect(() => {
    if (styleMemo[style_id]) {
      setCurrentImageIndex(styleMemo[style_id]);
    } else {
      setCurrentImageIndex(0);
    }
  }, [currentStyle]);

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
