import React from 'react';
import generateStars from '../../Sub_RatingsReviews/generateStars.js';


function ProdInfo({ thisProduct, thisPrice, thisAvgRating }) {
  // =================== HELPERS ===================
  const {
    category,
    name,
    slogan,
  } = thisProduct;

  let niceOriginalPrice;
  let niceSalePrice;

  if (thisPrice[0]) {
    niceOriginalPrice = thisPrice[0].slice(0, thisPrice[0].length - 3);
  }
  if (thisPrice[1]) {
    niceSalePrice = thisPrice[1].slice(0, thisPrice[0].length - 3);
  }

  // =================== COMPONENT ===================
  return (
    <div className="prod-info">
      <p className="category">{category}</p>
      <p className="name">{name}</p>
      <p className="slogan">&quot;{slogan}&quot;</p>
      <p className="no-sale price">{`$${niceOriginalPrice}`}</p>
      <p className="sale price">{thisPrice[1] && ` | $${niceSalePrice}`}</p>
      <p className="star-rating">
        {generateStars(thisAvgRating[0], 5)} | {`(${thisAvgRating[1]})`}
      </p>
    </div>

  );
}

export default ProdInfo;
