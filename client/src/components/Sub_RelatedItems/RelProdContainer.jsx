import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SingleProd from './SingleProd.jsx';

export default function RelProdContainer({
  product, productID, setProductID, productStyle, reviewMetadata,
}) {
  // =================== STATES ===================
  const [relatedIDs, setRelatedIDs] = useState([]);

  const [relatedProds, setRelatedProds] = useState([]);

  const [allowCardClick, setAllowCardClick] = useState(true);

  // =================== EFFECTS ===================

  useEffect(() => getRelatedProdsAndReviews(), [productID]);

  // =================== HELPERS ===================
  const getRelatedProdsAndReviews = () => {
    axios.get(`/api/products/${productID}/related`)
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

  // =================== HANDLERS ===================
  const setAsNewOverview = (id) => {
    // event.preventDefault();
    if (allowCardClick) setProductID(id);
  };

  // =================== COMPONENT ===================
  return (
    <div className="related-items container">
      {!relatedProds.length && (
        <div className="related-prod null">
          There are no related products to display at this time...
        </div>
      )}
      {relatedProds.map((thisProduct, i) => (
        <SingleProd
          className="related-prod"
          onClick={setAsNewOverview}
          key={i}
          parentProduct={product}
          thisProduct={thisProduct} // this single product
          setProductID={setProductID} // function
          productStyle={productStyle} // parent product's styles
          reviewMetadata={reviewMetadata} // parent product's meta
          setAllowCardClick={setAllowCardClick}
        />
      ))}
    </div>
  );
}
