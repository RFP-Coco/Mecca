import React from 'react';

import ComparisonModal from './ComparisonModal.jsx';

function ProdImg({ defaultPic, product }) {

  const picUrl = defaultPic || '../../../assets/noProdImg.png';

  return (
    <div className="prod-pic">
      <button
        className="btn compare-btn"
        type="button"
      ><img src="../../../../assets/compareStar.png" alt="opens a comparison modal" />
      </button>
      <img
        className="default-pic"
        src={picUrl}
        alt={`a sample of the ${product.name} product`}
      />
    </div>

  );

};

export default ProdImg;
