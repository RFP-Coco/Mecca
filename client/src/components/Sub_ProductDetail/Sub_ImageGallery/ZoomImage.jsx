/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef, useEffect} from 'react';

function ZoomImage({ src, showModalView, setShowModalView }) {
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);
  const imageRef = useRef(null);

  const handleClick = () => {
    setShowModalView('expand');
  };

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setImageX(rect.width / 2 - x);
    setImageY(rect.height / 2 - y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showModalView]);

  return (
    <img
      ref={imageRef}
      src={src}
      style={{
        width: '250%',
        height: '250%',
        transform: `translate(${imageX}px, ${imageY}px)`,
        transition: 'all 0.5s ease-out',
        cursor: 'zoom-out',
      }}
      onClick={handleClick}
    />
  );
}

export default ZoomImage;
