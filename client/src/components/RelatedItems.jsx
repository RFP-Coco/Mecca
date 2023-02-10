import React, { useState } from 'react';

import RelProdContainer from './Sub_RelatedItems/RelProdContainer.jsx';
import OutfitContainer from './Sub_RelatedItems/OutfitContainer.jsx';
import './Sub_RelatedItems/styles/related.css';

export default function RelatedItems({
  product, productID, setProductID,
  productStyle, currentStyle, reviewMetadata,
}) {
  const [allowCardClick, setAllowCardClick] = useState(true);
  const [relProdIndex, setRelProdIndex] = useState(0);
  const [myOutfitIndex, setMyOutfitIndex] = useState(0);

  const setAsNewOverview = (id) => {
    if (allowCardClick) {
      setProductID(id);
      setRelProdIndex(0);
      setMyOutfitIndex(0);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section>
      <div className="title">Items related to {`${product.name}`}</div>
      <div className="related-items">
        <RelProdContainer
          index={relProdIndex}
          setIndex={setRelProdIndex}
          parentProduct={product}
          parentProductID={productID}
          setParentProductID={setProductID}
          parentProductStyle={productStyle}
          parentReviewMetadata={reviewMetadata}
          setAsNewOverview={setAsNewOverview}
          setAllowCardClick={setAllowCardClick}
        />
      </div>
      <div className="title">My Outfit Menagerie</div>
      <div className="my-outfit">
        <OutfitContainer
          index={myOutfitIndex}
          setIndex={setMyOutfitIndex}
          parentProduct={product}
          parentProductID={productID}
          setParentProductID={setProductID}
          parentProductStyle={productStyle}
          currentParentProductStyle={currentStyle}
          parentReviewMetadata={reviewMetadata}
          setAsNewOverview={setAsNewOverview}
          setAllowCardClick={setAllowCardClick}
        />
      </div>
    </section>
  );
}


// use a state to track size of Window (ecvent listener)
  // at resize, query select the width

// use a state to store current scroll width (size of container)

// when window state =< scroll state
  // so something with the button - switch its position css?
