import React from 'react';

import ProdImg from './Sub_SingleProd/ProdImg.jsx';
import ProdInfo from './Sub_SingleProd/ProdInfo.jsx';

function SingleProd({ product, setProductID }) {

  const { category, default_price, description, name, slogan, features } = product;

  return (
    <div className="related-prod card">
      This is a single product card.
      <br></br>
      Category: {category}
      <br></br>
      Name: {name}
      <br></br>
      Slogan: {slogan}
      <br></br>
      Description: {description}
      <br></br>
      Default Price: {default_price}
      <br></br>
    </div>
  );

}

export default SingleProd;
