import React from 'react';

function ProductFeature({ product }) {
  return (
    <div className="product-feature">
      {product.features.map(
        (feature, index) => <p key={index}>{feature.feature} : {feature.value}</p>,
      )}
    </div>
  );
}

export default ProductFeature;
