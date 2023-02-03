import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

function StyleEntry({ style, currentStyle, setCurrentStyle, startSelect, setStartSelect }) {
  // console.log('SHOW CURRENT STYLE: ', currentStyle);
  const { thumbnail_url } = style.photos[0];
  return (
    <div
      className="style-entry-container"
      style={{
        backgroundImage: `url(${thumbnail_url
          ? thumbnail_url.substring(thumbnail_url.indexOf('http'))
          : '../../../assets/noProdImg.png'})`,
      }}
      onClick={() => { setCurrentStyle(style); setStartSelect(true); }}
    >
      {startSelect && style.style_id === currentStyle.style_id
        ? <AiFillCheckCircle className="checkmark" />
        : null}
    </div>
  );
}
export default StyleEntry;
