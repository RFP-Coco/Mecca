import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';

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
    <div className="social-media-share">
      <AiFillTwitterCircle
        aria-label="icon-twitter"
        className="icon icon-twitter"
        size={35}
        onClick={() => handleClick('twitter')}
      />
      <SiFacebook
        aria-label="icon-facebook"
        className="icon icon-facebook"
        size={29}
        onClick={() => handleClick('facebook')}
      />
      <RiPinterestFill
        aria-label="icon-pinterest"
        className="icon icon-pinterest"
        size={35}
        onClick={() => handleClick('pinterest')}
      />
    </div>
  );
}
export default SocialMediaShare;
