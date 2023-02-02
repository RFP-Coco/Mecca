import React, { useState, useEffect } from 'react';
import StyleList from './Sub_StyleSelector/StyleList.jsx';

function StyleSelector({ productID, productStyle, currentStyle, setCurrentStyle }) {
  console.log('SHOW CURRENT STYLE: ', currentStyle);
  const [startSelect, setStartSelect] = useState(false);

  useEffect(() => { setStartSelect(false); }, [productID]);

  return (
    <div className="style-selector">
      <div className="price" style={{ padding: '1rem 0' }}>
        {currentStyle.sale_price ? <p><span className="sale-price">${currentStyle.sale_price}</span> <span className="original-sale-price">${currentStyle.original_price}</span></p> : <p><span className="original-price">${currentStyle.original_price}</span></p>}
      </div>
      <div style={{ paddingBottom: '1rem' }}>STYLE {'>'} <span style={{ fontStyle: 'italic' }}>{startSelect ? currentStyle.name : 'SELECTED STYLE'}</span></div>
      <StyleList
        productStyle={productStyle}
        setCurrentStyle={setCurrentStyle}
        currentStyle={currentStyle}
        startSelect={startSelect}
        setStartSelect={setStartSelect}
      />
    </div>
  );
}
export default StyleSelector;
