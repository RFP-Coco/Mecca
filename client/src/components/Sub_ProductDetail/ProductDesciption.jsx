import React from 'react';

function ProductDesciption({ product }) {
  return (
    <div className="product-description">
      <div className="product-slogan">{product.slogan}</div>
      <div className="product-description-text">{product.description}</div>
    </div>
  );
}
export default ProductDesciption;
