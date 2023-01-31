import React from 'react';

const DefaultView = ({ images, currentImageIndex, setCurrentImageIndex }) => {


  return (
    <div className="default-view">
      {currentImageIndex !== 0 &&  <button onClick={() => setCurrentImageIndex(currentImageIndex - 1)}>prev</button>}
      <img src={images[currentImageIndex].url || "https://demofree.sirv.com/products/123456/123456.jpg?profile=error-example"} />
      {currentImageIndex !== images.length - 1 && <button onClick={() => setCurrentImageIndex(currentImageIndex + 1)}>next</button>}
    </div>
  );
};
export default DefaultView;