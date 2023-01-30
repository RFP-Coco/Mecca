import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import ProdImg from './Sub_SingleProd/ProdImg.jsx';
import ProdInfo from './Sub_SingleProd/ProdInfo.jsx';

function SingleProd({ product, setProductID, productStyle, reviewMetadata }) {

  // =================== STATES ===================
  const [thisAvgRating, setThisAvgRating] = useState([]);

  // =================== EFFECTS ===================

  useEffect(() => getSetAvg(), []);

  // =================== HELPERS ===================
  const {
    category,
    default_price,
    description,
    name,
    slogan,
    features
  } = product;

  const getSetAvg = () => {
    axios.get(`/api/reviews/meta?product_id=${product.id}`)
      .then((thisReviewMeta) => {
        const avg = getAvg(thisReviewMeta.data);
        setThisAvgRating(avg);
      })
      .catch((err) => err);
  };

  const getAvg = ({ratings}) => {
    let totalRatings = 0;
    let sum = 0;
    for (let num in ratings) {
      sum += Number(num) * ratings[num];
      totalRatings += Number(ratings[num]);
    }
    return [sum / totalRatings, totalRatings];
  };

  // =================== COMPONENT ===================
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
      Avgerage rating: {thisAvgRating[0]} | {`(${thisAvgRating[1]})`}
      <br></br>
      <br></br>
    </div>
  );
}

export default SingleProd;
