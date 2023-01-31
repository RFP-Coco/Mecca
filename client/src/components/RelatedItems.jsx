import React from 'react';

import RelProdContainer from './Sub_RelatedItems/RelProdContainer.jsx';
import OutfitContainer from './Sub_RelatedItems/OutfitContainer.jsx';
import './Sub_RelatedItems/styles/related.css';

function RelatedItems({ product, productID, setProductID, productStyle, reviewMetadata }) {

  return (
    <section className="related-items">
      <div>
        <RelProdContainer
          product={product}
          productID={productID}
          setProductID={setProductID}
          productStyle={productStyle}
          reviewMetadata={reviewMetadata}
        />
      </div>
      <div>
        <OutfitContainer />
      </div>
    </section>
  );
}

export default RelatedItems;
