import React from 'react';

function ProdInfo({ thisProduct, thisPrice, thisAvgRating }) {

  // =================== EFFECTS ===================


  // =================== HELPERS ===================
  const {
    category,
    name,
    slogan,
  } = thisProduct;

  let niceOriginalPrice;
  let niceSalePrice;
  let niceAvgRating;

  if (thisPrice[0]) {
    niceOriginalPrice = thisPrice[0].slice(0, thisPrice[0].length - 3);
  }
  if (thisPrice[1]) {
    niceSalePrice = thisPrice[1].slice(0, thisPrice[0].length - 3);
  }

  if (thisAvgRating[0]) {
    niceAvgRating = thisAvgRating[0].toFixed(2);
  } else {
    niceAvgRating = 0;
  }

  // =================== COMPONENT ===================
  return (
    <div className="prod-info">
      <p className="category">{category}</p>
      <p className="name">{name}</p>
      <p className="slogan">{slogan}</p>
      <p className="no-sale price">{`$${niceOriginalPrice}`}</p>
      <p className="sale price">{thisPrice[1] && ` | $${niceSalePrice}`}</p>
      <p className="star-rating">
        {niceAvgRating} | {`(${thisAvgRating[1]})`}
      </p>
    </div>

  );
}

export default ProdInfo;
