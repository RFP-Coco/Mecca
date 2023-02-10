import React, { useState, useEffect, useRef } from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { flushSync } from 'react-dom';
import axios from 'axios';

import SingleProd from './SingleProd.jsx';

export default function RelProdContainer({
  parentProduct, parentProductID, setParentProductID,
  parentProductStyle, parentReviewMetadata,
  setAsNewOverview, setAllowCardClick, index, setIndex,
}) {
  // =================== STATES ===================
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProds, setRelatedProds] = useState([]);
  const cardsRef = useRef(null);

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

    // const scrollbar = document.querySelector(
    //   '#RelatedProducts > section > div.related-items > div',
    // );
    // scrollbar.scrollLeft = 1110;
  }, [parentProductID]);

  // =================== HELPERS ===================
  const handleRightClick = () => {
    flushSync(() => {
      if (index < relatedProds.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    cardsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  };

  const handleLeftClick = () => {
    flushSync(() => {
      if (!index) {
        setIndex(relatedProds.length - 1);
      } else {
        setIndex(index - 1);
      }
    });

    cardsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  };

  // =================== COMPONENT ===================
  return (
    <div className="scrollable container">
      {!relatedProds.length && (
        <div
          className="related-prod null"
          data-testid="null"
        >
          There are no related products to display at this time...
        </div>
      )}
      {index > 0 && (
        <BiChevronLeftCircle
          className="scroll-left"
          onClick={handleLeftClick}
          data-testid="scroll-left"
        />
      )}
      {relatedProds.map((thisProduct, i) => (
        <SingleProd
          key={thisProduct.id}
          ref={index === i ? cardsRef : null}
          parentProduct={parentProduct}
          setParentProductID={setParentProductID}
          parentProductStyle={parentProductStyle}
          parentReviewMetadata={parentReviewMetadata}
          thisProduct={thisProduct}
          setAllowCardClick={setAllowCardClick}
          setAsNewOverview={setAsNewOverview}
        />
      ))}
      {index < relatedProds.length - 1 && (
        <BiChevronRightCircle
          className="scroll-right"
          onClick={handleRightClick}
          data-testid="scroll-right"
        />
      )}
    </div>
  );
}
