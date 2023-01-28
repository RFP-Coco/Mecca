import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SingleProd from './SingleProd.jsx';

function RelProdContainer({ product, productID, setProductID, reviewMetadata }) {

  // =================== STATES ===================
  const [relatedIDs, setRelatedIDs] = useState([]);
  // const [relatedUrls, setRelatedUrls] = useState([]);

  // array of {related product}s
  const [relatedProds, setRelatedProds] = useState([]);

  // =================== EFFECTS ===================

  useEffect(() => {
    axios.get(`/api/products/${productID}/related`)
      .then((response) => {
        setRelatedIDs(response.data);
        // pass the new array of prod IDs thru
        return response.data;
      })
      .then((ids) => {
        // store an array of successful GET promises
        const requests = ids.map((id) => axios.get(`/api/products/${id}`));
        // pass them thru to next
        return axios.all(requests);
      })
      .then((responses) => {
        // set each response's data into the related prods state
        setRelatedProds([...responses.map((response) => response.data)]);
      })
      .catch((err) => err);
  }, [productID]); // fire on new setting of 'product'

  // =================== HELPERS ===================


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
          />
        );
      })}
    </div>
  );

}

export default RelProdContainer;
