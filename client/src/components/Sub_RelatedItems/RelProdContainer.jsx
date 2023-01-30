import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SingleProd from './SingleProd.jsx';

function RelProdContainer({ product, productID, setProductID, productStyle, reviewMetadata }) {

  // =================== STATES ===================
  const [relatedIDs, setRelatedIDs] = useState([]);

  // array of {related product}s
  const [relatedProds, setRelatedProds] = useState([]);

  // array of relatedProds' review metas
  const [singleReviewMeta, setSingleReviewMeta] = useState([]);

  // =================== EFFECTS ===================

  useEffect(() => getRelatedProdsAndReviews(), [productID]); // fire on new setting of 'product'

  // =================== HELPERS ===================
  const getRelatedProdsAndReviews = () => {
    axios.get(`/api/products/${productID}/related`)
      .then((response) => {
        setRelatedIDs(response.data);
        // pass the new array of prod IDs thru
        return response.data;
      })
      .then((ids) => {
        // store an array of successful GET product promises
        const productReqs = ids.map((id) => axios.get(`/api/products/${id}`));
        // pass it thru to next
        return axios.all(productReqs);
      })
      .then((responses) => {
        // store, then set each response's data into the related prods state
        const prodSetter = [...responses.map((response) => response.data)];
        setRelatedProds(prodSetter);
        // pass the 'stored state' on to get each review meta
        return prodSetter;
      })
      // .then((products) => {
      //   getEachReviewMeta(products)
      // })
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
            key={i}
            product={product}
            setProductID={setProductID}
            productStyle={productStyle}
            reviewMetadata={reviewMetadata}
          />
        );
      })}
    </div>
  );

}

export default RelProdContainer;
