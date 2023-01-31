import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SingleProd from './SingleProd.jsx';

function RelProdContainer({ product, productID, setProductID, productStyle, reviewMetadata }) {

  // =================== STATES ===================
  const [relatedIDs, setRelatedIDs] = useState([]);

  const [relatedProds, setRelatedProds] = useState([]);

  // =================== EFFECTS ===================

  useEffect(() => getRelatedProdsAndReviews(), [productID]);

  // =================== HELPERS ===================
  const getRelatedProdsAndReviews = () => {
    axios.get(`/api/products/${productID}/related`)
      .then((response) => {
        setRelatedIDs(response.data);
        return response.data;
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
    <div className="related-products container">
      {!relatedProds.length && (
        <div className="related-prod null">
          There are no related products to display at this time...
        </div>
      )}
      {relatedProds.map((product, i) => {
        return (
          < SingleProd
            className={"related-prod card"}
            key={i}
            product={product} // this single product
            setProductID={setProductID} // function
            productStyle={productStyle} // parent product's styles
            reviewMetadata={reviewMetadata} // parent product's meta
          />
        );
      })}
    </div>
  );

}

export default RelProdContainer;
