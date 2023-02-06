/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function ImageThumbnail({ index, img, currentImageIndex, setCurrentImageIndex }) {
  const { thumbnail_url } = img;
  const defaultUrl = '../../../assets/noProdImg.png';
  return (
    <div
      className="image-thumbnail-container"
      onClick={() => { setCurrentImageIndex(index); }}
      onKeyDown={() => { setCurrentImageIndex(index); }}
    >
      <img
        className="image-thumbnail"
        style={index === currentImageIndex ? { borderBottom: '8px solid blue' } : {}}
        src={thumbnail_url
          ? thumbnail_url.substring(thumbnail_url.indexOf('http'))
          : defaultUrl}
        alt="thumbnail"
      />
    </div>

  );
}
export default ImageThumbnail;
