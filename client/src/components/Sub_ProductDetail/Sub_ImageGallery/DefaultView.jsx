import React from 'react';

function DefaultView({ images, currentImageIndex, setCurrentImageIndex }) {
  return (
    <div className="default-view">
      <button
        type="button"
        style={{ visibility: (currentImageIndex !== 0) ? 'visible' : 'hidden' }}
        onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
      >
        prev
      </button>

      <img src={images[currentImageIndex].url ? images[currentImageIndex].url.substring(images[currentImageIndex].url.indexOf('http')) : '../../../assets/noProdImg.png'} alt="product" />

      <button
        type="button"
        style={{ visibility: (currentImageIndex !== images.length - 1) ? 'visible' : 'hidden' }}
        onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
      >
        next
      </button>
    </div>
  );
}
export default DefaultView;
