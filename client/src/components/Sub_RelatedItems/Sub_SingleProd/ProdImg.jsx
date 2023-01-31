import React from 'react';

import ComparisonModal from './ComparisonModal.jsx';

function ProdImg({ defaultPic, product }) {

  return (
    <>
      <div>This is a single product card.</div>
      <button
        className="compare-btn btn"
      ><img src={'../../../../assets/moreInfo.png'}/>
      </button>
      <img
        className="default-pic"
        src={defaultPic}
        alt={`a sample image of the ${product.name} product`}
      />
    </>

  );

};

export default ProdImg;
