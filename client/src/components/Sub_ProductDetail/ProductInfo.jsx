/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

function ProductInfo({ product }) {
  // console.log(product);

  return (
    <div>
      <p>stars and reviews here</p>
      <p>Category {'>'} {product.category}</p>
      <h1>{product.name}</h1>
      <p>{product.slogan}</p>
      <p>{product.description}</p>
      <p>Feature: </p>
      {product.features.map(
        (feature, index) => <p key={index}>{feature.feature} : {feature.value}</p>,
      )}
      <p>share on social media</p>
    </div>
  );
}

export default ProductInfo;
