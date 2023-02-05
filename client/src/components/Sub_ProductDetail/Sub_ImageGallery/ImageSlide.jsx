/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';

function ImageSlide({ images, currentImageIndex, setCurrentImageIndex }) {
  const [start, setStart] = useState(0);
  const maxImages = 7;

  useEffect(() => {
    if (currentImageIndex < start) {
      setStart(currentImageIndex);
    } else if (currentImageIndex - start >= maxImages) {
      setStart(start + 1);
    }
  }, [currentImageIndex]);

  return (

    <div className="image-slide">
      <button
        type="button"
        style={{ visibility: (currentImageIndex !== 0) ? 'visible' : 'hidden' }}
        onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
      >
        prev
      </button>

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

      <button
        type="button"
        style={{ visibility: (currentImageIndex < images.length - 1) ? 'visible' : 'hidden' }}
        onClick={() => { setCurrentImageIndex(currentImageIndex + 1); }}
      >
        next
      </button>
    </div>
  );
}
export default ImageSlide;
