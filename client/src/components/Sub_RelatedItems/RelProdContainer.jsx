import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SingleProd from './SingleProd.jsx';

export default function RelProdContainer({
  parentProduct, parentProductID, setParentProductID,
  parentProductStyle, parentReviewMetadata,
  setAsNewOverview, setAllowCardClick,
}) {
  // =================== STATES ===================
  const [relatedIDs, setRelatedIDs] = useState([]);

  const [relatedProds, setRelatedProds] = useState([]);

  // =================== EFFECTS ===================

  useEffect(() => {
    axios.get(`/api/products/${parentProductID}/related`)
      .then((response) => {
        let uniqueIDs = new Set(response.data);
        if (uniqueIDs.has(parentProductID)) {
          uniqueIDs.delete(parentProductID);
        }
        uniqueIDs = [...uniqueIDs];
        setRelatedIDs(uniqueIDs);
        return uniqueIDs;
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
  }, [parentProductID]);

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
