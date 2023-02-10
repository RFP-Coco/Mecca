/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef, useEffect } from 'react';

function ZoomImage({ src, modalView, setModalView }) {
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);
  const imageRef = useRef(null);

  const handleClick = () => {
    setModalView('expand');
  };

  const handleMouseMove = (e) => {
    // get the coordinates of the image
    const {
      left, top, width, height,
    } = e.target.getBoundingClientRect();
    // e.pageX is the x coordinates of the cursor
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    // get the updated x and y coordinates of the image
    setImageX(x);
    setImageY(y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [modalView]);

  return (
    <figure onClick={handleClick} onMouseMove={handleMouseMove} style={{ backgroundImage: `url(${src})`, backgroundPosition: `${imageX}% ${imageY}%`, backgroundSize: '250%', cursor: 'zoom-out', }}>
      <img src={src} />
    </figure>

  );
}

export default ZoomImage;
