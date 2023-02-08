import React from 'react';

function ProductDesciption({ product }) {
  return (
    <div className="product-description">
      <div
        aria-label="product slogan"
        className="product-slogan"
      >{product.slogan}
      </div>
      <div
        aria-label="product description"
        className="product-description-text"
      >{product.description}
      </div>
    </div>
  );
}
export default ProductDesciption;
