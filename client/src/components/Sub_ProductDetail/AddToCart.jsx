import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SizeSelector from './Sub_AddToCart/SizeSelector.jsx';
import QuantitySelector from './Sub_AddToCart/QuantitySelector.jsx';

function AddToCart({ skus, startSelect, currentStyle }) {
  const [skuID, setSkuID] = useState();
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [validQuantities, setValidQuantities] = useState([1]);
  const validSkus = Object.entries(skus).filter((entry) => entry[1].quantity > 0);

  const handleSize = (e) => { setSkuID(e.target.value); setQuantity(1); };

  const handleQuantity = (e) => setQuantity(e.target.value);

  const submitCart = () => {
    const config = {
      sku_id: skuID,
      count: quantity,
    };
    axios.post('/api/cart', config)
      .then()
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    if (!skuID) {
      setShowAlert(true);
    } else {
      submitCart();
    }
  };

  useEffect(() => {
    if (skuID) {
      setValidQuantities(Array.from({ length: skus[skuID].quantity }, (_, i) => i + 1));
    }
    setShowAlert(false);
  }, [skuID]);

  useEffect(() => {
    setSkuID(undefined);
    setShowAlert(false);
  }, [currentStyle]);

  return (
    <div>
      <div
        style={{ visibility: showAlert ? 'visible' : 'hidden' }}>
        Please select size
      </div>
      <div className="size-selector-container">
        <SizeSelector
          skuID={skuID}
          validSkus={validSkus}
          startSelect={startSelect}
          handleSize={handleSize}
        />
        <QuantitySelector
          skuID={skuID}
          quantity={quantity}
          validQuantities={validQuantities}
          handleQuantity={handleQuantity}
        />
      </div>
      <div className="cart">
        <button
          type="button"
          style={{ visibility: validSkus.length ? 'visible' : 'hidden' }}
          onClick={handleClick}
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}
export default AddToCart;
