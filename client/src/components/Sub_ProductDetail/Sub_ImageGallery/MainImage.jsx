/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function MainImage({
  images, currentImageIndex, setCurrentImageIndex, showExpandView, setShowExpandView,
}) {
  const { url } = images[currentImageIndex];
  const defaultUrl = '../../../assets/noProdImg.png';
  const handleClick = () => {
    if (!showExpandView) {
      setShowExpandView(true);
    }
  };

  return (
    <div className="main-image">
      <button
        type="button"
        style={{ visibility: (currentImageIndex !== 0) ? 'visible' : 'hidden' }}
        onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
      >
        prev
      </button>

      <img
        onClick={handleClick}
        src={url ? url.substring(url.indexOf('http')) : defaultUrl}
        alt="product"
      />

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
export default MainImage;
