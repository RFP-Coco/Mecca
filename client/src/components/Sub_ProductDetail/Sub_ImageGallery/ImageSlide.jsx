/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { RxDoubleArrowUp, RxDoubleArrowDown } from 'react-icons/rx';
import ImageThumbnail from './ImageThumbnail.jsx';

function ImageSlide({
  images, currentImageIndex, setCurrentImageIndex, modalView,
}) {
  const [start, setStart] = useState(0);
  const maxImages = modalView === 'default' ? 4 : 4;

  useEffect(() => {
    if (currentImageIndex < start) {
      setStart(currentImageIndex);
    } else if (currentImageIndex - start >= maxImages) {
      setStart(start + 1);
    }
  }, [currentImageIndex]);

  return (

    <div className="image-slide">
      <RxDoubleArrowUp
        className="image-slide-button"
        style={{ visibility: (currentImageIndex !== 0) ? 'visible' : 'hidden' }}
        onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
      />

      <div className="image-slide-show">

        {images.map((img, index) => (index >= start && index - start < maxImages
          ? (
            <ImageThumbnail
              key={index}
              index={index}
              img={img}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          ) : null
        ))}
      </div>
      <RxDoubleArrowDown
        className="image-slide-button"
        style={{ visibility: (currentImageIndex < images.length - 1) ? 'visible' : 'hidden' }}
        onClick={() => { setCurrentImageIndex(currentImageIndex + 1); }}
      />
    </div>
  );
}
export default ImageSlide;
