import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

function ProductFeature({ product }) {
  return (
    <div role="group" className="product-feature">
      {product.features.map(
        (feature, index) => (
          <div role="listitem" key={index}><AiOutlineCheck className="check" />
            {feature.feature} : {feature.value}
          </div>
        ),
      )}
    </div>
  );
}

export default ProductFeature;
