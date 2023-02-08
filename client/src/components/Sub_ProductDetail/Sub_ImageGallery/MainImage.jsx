/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import ZoomImage from './ZoomImage.jsx';

function MainImage({
  images, currentImageIndex, setCurrentImageIndex, modalView, setModalView,
}) {
  const { url } = images[currentImageIndex];
  const defaultUrl = '../../../assets/noProdImg.png';
  const handleClick = () => {
    if (modalView === 'default') {
      setModalView('expand');
    } else if (modalView === 'expand') {
      setModalView('zoom');
    }
  };
  return (
    <div className="main-image">
      {modalView !== 'zoom' && (
        <MdOutlineArrowBackIos
          className="main-image-button"
          style={{ visibility: (currentImageIndex !== 0) ? 'visible' : 'hidden' }}
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
          aria-label="previous image"
        />
      )}

      {modalView !== 'zoom' && (
        <img
          onClick={handleClick}
          src={url ? url.substring(url.indexOf('http')) : defaultUrl}
          alt="main product"
        />
      )}

      {modalView === 'zoom' && (
        <ZoomImage
          src={url ? url.substring(url.indexOf('http')) : defaultUrl}
          modalView={modalView}
          setModalView={setModalView}
        />
      )}

      {modalView !== 'zoom' && (
        <MdOutlineArrowForwardIos
          className="main-image-button"
          style={{ visibility: (currentImageIndex !== images.length - 1) ? 'visible' : 'hidden' }}
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
          aria-label="next image"
        />
      )}

    </div>
  );
}
export default MainImage;
