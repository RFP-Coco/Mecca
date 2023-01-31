import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';

const ImageSlide = ({ images, currentImageIndex, setCurrentImageIndex }) => {
  console.log(images);
  return (
    <div className="image-slide">
      {images.map((img, index) =>
        <ImageThumbnail
          key={index}
          index={index}
          img={img}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      )}
    </div>
  );
};
export default ImageSlide;