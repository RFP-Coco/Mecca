import React from 'react';

import ComparisonModal from './ComparisonModal.jsx';

function ProdImg({ defaultPic, product }) {

  return (
    <>
      <button
        className="compare-btn btn"
        type="button"
      ><img src="../../../../assets/moreInfo.png" alt="opens a comparison modal" />
      </button>
      <img
        className="default-pic"
        src={defaultPic}
        alt={`a sample of the ${product.name} product`}
      />
    </>

  );

};

export default ProdImg;
