import React from 'react';

export default function ProdImg({
  defaultPic, thisProduct, setAllowCardClick, showComparisonModal, setShowComparisonModal,
}) {
  const picUrl = defaultPic || '../../../assets/noProdImg.png';

  // =================== Handlers ===================
  const handleComparisonModal = (event) => {
    event.preventDefault();
    console.log('click event: ', event);
    setShowComparisonModal(!showComparisonModal);
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
        alt={`a sample of the ${thisProduct.name} product`}
      />
    </div>

  );
}
