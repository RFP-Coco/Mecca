/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import SocialMediaShare from './Sub_ProductInfo/SocialMediaShare.jsx';

function ProductInfo({ product }) {
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
      <SocialMediaShare product={product} />
    </div>
  );
}

export default ProductInfo;
