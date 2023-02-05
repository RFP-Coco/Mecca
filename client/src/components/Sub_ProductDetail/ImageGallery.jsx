import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ImageSlide from './Sub_ImageGallery/ImageSlide.jsx';
import MainImage from './Sub_ImageGallery/MainImage.jsx';

function ImageGallery({ currentStyle, productID }) {
  console.log('SHOW CURRENT STYLE: ', currentStyle);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [styleMemo, setStyleMemo] = useState({});
  const [showExpandView, setShowExpandView] = useState(false);
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

  useEffect(() => {
    if (showExpandView) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [showExpandView]);

  return (
    // <div className={`image-gallery ${showExpandView ? 'expand-view' : ''}`}>
    <div className="image-gallery">
      {showExpandView
        && (
          <div className="expand-view">
            <ImageSlide
              images={currentStyle.photos}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              showExpandView={showExpandView}
            />
            <MainImage
              images={currentStyle.photos}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              showExpandView={showExpandView}
              setShowExpandView={setShowExpandView}
            />
            <AiOutlineClose className="close-icon" onClick={() => setShowExpandView(false)} />
          </div>

        )}
      <div className="default-view">
        <ImageSlide
          images={currentStyle.photos}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          showExpandView={showExpandView}
        />
        <MainImage
          images={currentStyle.photos}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          showExpandView={showExpandView}
          setShowExpandView={setShowExpandView}
        />
      </div>
    </div>
  );
}
export default ImageGallery;
