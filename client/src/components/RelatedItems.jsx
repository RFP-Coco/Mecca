import React from 'react';

import RelProdContainer from './Sub_RelatedItems/RelProdContainer.jsx';
import OutfitContainer from './Sub_RelatedItems/OutfitContainer.jsx';

function RelatedItems({ product, productID, setProductID, reviewMetadata }) {

  return (
    <section id="related-items">
      <div>
        <RelProdContainer
          product={product}
          productID={productID}
          setProductID={setProductID}
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
