/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function ImageThumbnail({
  index, img, currentImageIndex, setCurrentImageIndex,
}) {
  return (
    <div
      onClick={() => { setCurrentImageIndex(index); }}
      onKeyDown={() => { setCurrentImageIndex(index); }}
    >
      <img
        className="image-thumbnail"
        style={index === currentImageIndex ? { borderBottom: '8px solid blue' } : {}}
        src={img.thumbnail_url ? img.thumbnail_url.substring(img.thumbnail_url.indexOf('http'))
          : '../../../assets/noProdImg.png'}
        alt="thunmbnail"
      />
    </div>

  );
}
export default ImageThumbnail;
