/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import ZoomImage from './ZoomImage.jsx';

function MainImage({
  images, currentImageIndex, setCurrentImageIndex, showModalView, setShowModalView,
}) {
  const { url } = images[currentImageIndex];
  const defaultUrl = '../../../assets/noProdImg.png';
  const handleClick = () => {
    if (showModalView === 'default') {
      setShowModalView('expand');
    } else if (showModalView === 'expand') {
      setShowModalView('zoom');
    }
  };
  return (
    <div className="main-image">
      {showModalView !== 'zoom' && (
        <button
          type="button"
          style={{ visibility: (currentImageIndex !== 0) ? 'visible' : 'hidden' }}
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
        >
          prev
        </button>
      )}

      {showModalView !== 'zoom' && (
        <img
          onClick={handleClick}
          src={url ? url.substring(url.indexOf('http')) : defaultUrl}
          alt="product"
        />
      )}

      {showModalView === 'zoom' && (
        <ZoomImage
          src={url ? url.substring(url.indexOf('http')) : defaultUrl}
          showModalView={showModalView}
          setShowModalView={setShowModalView}
        />
      )}

      {showModalView !== 'zoom' && (
        <button
          type="button"
          style={{ visibility: (currentImageIndex !== images.length - 1) ? 'visible' : 'hidden' }}
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
        >
          next
        </button>
      )}

    </div>
  );
}
export default MainImage;
