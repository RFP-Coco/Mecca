import React from 'react';

import ComparisonModal from './ComparisonModal.jsx';

export default function ProdImg({ defaultPic, product, setAllowCardClick }) {
  const picUrl = defaultPic || '../../../assets/noProdImg.png';

  // =================== Handlers ===================
  const handleComparisonModal = (event) => {
    event.preventDefault();
    console.log('click event: ', event);
  };

  // =================== COMPONENT ===================
  return (
    <div className="prod-pic">
      <button
        className="btn compare-btn"
        onMouseEnter={() => setAllowCardClick(false)}
        onMouseLeave={() => setAllowCardClick(true)}
        onClick={handleComparisonModal}
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
}
