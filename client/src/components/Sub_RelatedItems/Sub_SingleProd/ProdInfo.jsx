import React from 'react';

function ProdInfo({ product, thisPrice, thisAvgRating }) {

  // =================== EFFECTS ===================


  // =================== HELPERS ===================
  const {
    category,
    description,
    name,
    id,
    slogan,
    features
  } = product;

  // =================== COMPONENT ===================
  return (
    <div className="related-prod card">
      Category: {category}
      <br></br>
      Name: {name}
      <br></br>
      Slogan: {slogan}
      <br></br>
      Description: {description}
      <br></br>
      Current Price: {thisPrice[0]} --- {`(${thisPrice[1]})`}
      <br></br>
      Avgerage rating: {thisAvgRating[0]} --- {`(${thisAvgRating[1]})`}
      <br></br>
      <br></br>
    </div>

  );
};

export default ProdInfo;
