import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SingleProd from './SingleProd.jsx';

export default function RelProdContainer({
  parentProduct, parentProductID, setParentProductID,
  parentProductStyle, parentReviewMetadata,
  setAsNewOverview, setAllowCardClick,
}) {
  const urls = [
    `/api/products/${parentProductID}/related`,
    
  ];

    axios.get(`/api/products/${parentProductID}/related`)
      .then((response) => {
        const uniqueIds = [...new Set(response.data)];
        setRelatedIDs(uniqueIds);
        return uniqueIds;
      })
      .then((ids) => {
        const productReqs = ids.map((id) => axios.get(`/api/products/${id}`));
        return axios.all(productReqs);
      })
      .then((responses) => {
        const prodSetter = [...responses.map((response) => response.data)];
        setRelatedProds(prodSetter);
        return prodSetter;
      })
      .catch((err) => err);

  // =================== STATES ===================
  const [relatedIDs, setRelatedIDs] = useState([]);

  const [relatedProds, setRelatedProds] = useState([]);

  // =================== EFFECTS ===================

  useEffect(() => getRelatedProdsAndReviews(), [parentProductID]);

  // =================== HELPERS ===================

  const getRelatedProdsAndReviews = () => {
    axios.get(`/api/products/${parentProductID}/related`)
      .then((response) => {
        const uniqueIds = [...new Set(response.data)];
        setRelatedIDs(uniqueIds);
        return uniqueIds;
      })
      .then((ids) => {
        const productReqs = ids.map((id) => axios.get(`/api/products/${id}`));
        return axios.all(productReqs);
      })
      .then((responses) => {
        const prodSetter = [...responses.map((response) => response.data)];
        setRelatedProds(prodSetter);
        return prodSetter;
      })
      .catch((err) => err);
  };

  // =================== COMPONENT ===================
  return (
    <div className="scrollable container">
      {!relatedProds.length && (
        <div className="related-prod null">
          There are no related products to display at this time...
        </div>
      )}
      {relatedProds.map((thisProduct) => (
        <SingleProd
          key={thisProduct.id}
          parentProduct={parentProduct}
          setParentProductID={setParentProductID}
          parentProductStyle={parentProductStyle}
          parentReviewMetadata={parentReviewMetadata}
          thisProduct={thisProduct}
          setAllowCardClick={setAllowCardClick}
          setAsNewOverview={setAsNewOverview}
        />
      ))}
    </div>
  );
}
