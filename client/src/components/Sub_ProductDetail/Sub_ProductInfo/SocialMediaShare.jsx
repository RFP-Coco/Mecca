import React, { useState } from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { RiPinterestFill } from 'react-icons/ri';

function SocialMediaShare({ product }) {
  const handleClick = (socialMedia) => {
    let url = '';
    if (socialMedia === 'twitter') {
      url = `https://twitter.com/share?text=Check%20out%20this%20awesome%20${product.name}!&url=${window.location.href}`;
    } else if (socialMedia === 'facebook') {
      url = `https://www.facebook.com/sharer.php?u=${window.location.href}`;
    } else if (socialMedia === 'pinterest') {
      url = `https://pinterest.com/pin/create/button/?&url=${window.location.href}&description=Check%20out%20this%20awesome%20${product.name}!`;
    }
    const windowOptions = 'location=no, width=500, height=300';
    window.open(url, '_blank', windowOptions);
  };

  return (
    <div>
      <AiFillTwitterCircle size={35} onClick={() => handleClick('twitter')} />
      <AiFillFacebook size={35} onClick={() => handleClick('facebook')} />
      <RiPinterestFill size={35} onClick={() => handleClick('pinterest')} />
    </div>
  );
}
export default SocialMediaShare;
