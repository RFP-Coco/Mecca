import React, { useState } from 'react';

import RelProdContainer from './Sub_RelatedItems/RelProdContainer.jsx';
import OutfitContainer from './Sub_RelatedItems/OutfitContainer.jsx';
import './Sub_RelatedItems/styles/related.css';

export default function RelatedItems({
  product, productID, setProductID, productStyle, reviewMetadata,
}) {

  const [allowCardClick, setAllowCardClick] = useState(true);

  const setAsNewOverview = (id) => {
    if (allowCardClick) setProductID(id);
  };

  return (
    <section>
      <div className="related-items">
        <RelProdContainer
          parentProduct={product}
          parentProductID={productID}
          setParentProductID={setProductID}
          parentProductStyle={productStyle}
          parentReviewMetadata={reviewMetadata}
          setAsNewOverview={setAsNewOverview}
          setAllowCardClick={setAllowCardClick}
        />
      </div>
      <div className="my-outfit">
        <OutfitContainer
          parentProduct={product}
          parentProductID={productID}
          setParentProductID={setProductID}
          parentProductStyle={productStyle}
          parentReviewMetadata={reviewMetadata}
          setAsNewOverview={setAsNewOverview}
          setAllowCardClick={setAllowCardClick}
        />
      </div>
    </section>
  );
}
