import React from 'react';

function QuantitySelector({ skuID, quantity, validQuantities, handleQuantity }) {
  return (
    <div className="quantity-selector">
      <select name="quantity" value={quantity} onChange={handleQuantity}>
        {skuID
          ? validQuantities.map((item) => <option key={item} value={item}>{item}</option>)
          : <option>1</option>}
      </select>
    </div>
  );
}

export default QuantitySelector;
