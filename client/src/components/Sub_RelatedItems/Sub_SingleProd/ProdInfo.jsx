import React from 'react';

function ProdInfo({ product, thisPrice, thisAvgRating }) {

  // =================== EFFECTS ===================


  // =================== HELPERS ===================
  const {
    category,
    name,
    slogan,
  } = product;

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
      <div>
        {/* category */}
        {category}
      </div>

      <div>
        {/* product name, addtl text (slogan) */}
        {name}<br />{slogan}
      </div>

      <div>
        {/* orig price | sale price */}
        {`$${niceOriginalPrice}`} {thisPrice[1] && ` | $${niceSalePrice}`}
      </div>

      <div>
        {/* avg for stars | tot. reviews */}
        {thisAvgRating[0]} | {`(${thisAvgRating[1]})`}
      </div>
    </div>

  );
}

export default ProdInfo;
