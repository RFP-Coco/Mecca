import React from 'react';

export default function ProdImg({
  defaultPic, thisProduct,
  currentParentProductStyle, setAllowCardClick,
  showComparisonModal, setShowComparisonModal,
  handleRemoveOutfit,
}) {
  const picUrl = defaultPic || '../../../assets/noProdImg.png';

  // =================== Handlers ===================
  const handleComparisonModal = (e) => {
    e.preventDefault();
    setShowComparisonModal(!showComparisonModal);
  };

  // =================== COMPONENT ===================
  return (
    <div className="prod-pic">
      {currentParentProductStyle && (
        <button
          className="btn remove-outfit"
          onMouseEnter={() => setAllowCardClick(false)}
          onMouseLeave={() => setAllowCardClick(true)}
          onClick={handleRemoveOutfit}
          type="button"
        >
          <img src="../../../../assets/remove.png" alt="remove this product from your collection" />
        </button>
      )}
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
