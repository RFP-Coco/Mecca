import React from 'react';
import StyleList from './Sub_StyleSelector/StyleList.jsx';

function StyleSelector({
  productStyle, currentStyle, setCurrentStyle, startSelect, setStartSelect,
}) {
  const { sale_price, original_price, name } = currentStyle;
  return (
    <div className="style-selector">
      <div className="price" style={{ padding: '1rem 0' }}>
        {sale_price
          ? (
            <p>
              <span className="sale-price">${sale_price}</span>
              <span className="original-sale-price">${original_price}</span>
            </p>
          )
          : (
            <p>
              <span className="original-price">${original_price}</span>
            </p>
          )}
      </div>
      <div style={{ paddingBottom: '1rem' }}>
        STYLE {'>'} &nbsp;
        <span style={{ fontStyle: 'italic' }}>{startSelect ? name : 'SELECTED STYLE'}</span>
      </div>
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
