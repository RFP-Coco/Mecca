import React, { useState } from 'react';
import StyleThumbnails from './Sub_StyleSelector/StyleThumbnails.jsx';

function StyleSelector({ currentStyle }) {
  // console.log('SHOW CURRENT STYLE: ', currentStyle);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="style-slector">
      <StyleThumbnails
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <DefaultView
        images={currentStyle.photos}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
}
export default StyleSelector;
