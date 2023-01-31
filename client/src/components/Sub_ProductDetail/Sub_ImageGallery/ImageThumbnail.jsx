import React, {useState} from 'react';



const ImageThumbnail = ({index, img, currentImageIndex, setCurrentImageIndex}) => {


  return (
    <img
    className='image-thumbnail'
    style={index === currentImageIndex ? { borderBottom: '8px solid blue' } : {}}
    src={img.thumbnail_url || "https://demofree.sirv.com/products/123456/123456.jpg?profile=error-example"}
    onClick={() => {setCurrentImageIndex(index)}}
    />
  );
};
export default ImageThumbnail;