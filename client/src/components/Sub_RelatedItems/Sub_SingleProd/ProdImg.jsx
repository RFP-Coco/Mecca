import React from 'react';

export default function ProdImg({
  defaultPic, thisProduct,
  currentParentProductStyle, setAllowCardClick,
  showComparisonModal, setShowComparisonModal, thisStyleID,
  myOutfits, setMyOutfits, checkStyles, setCheckStyles,
}) {
  const picUrl = defaultPic || '../../../assets/noProdImg.png';

  // =================== Handlers ===================
  const handleComparisonModal = (e) => {
    e.preventDefault();
    setShowComparisonModal(!showComparisonModal);
  };

  const handleRemoveOutfit = (e) => {
    e.preventDefault();

    const storedCheckStyles = JSON.parse(localStorage.getItem('inUse'));

    const toRemove = myOutfits.indexOf(myOutfits.find((outfit) => (
      outfit.style_id === thisStyleID
    )));

    const tempOutfits = myOutfits.slice();
    const tempChecks = { ...checkStyles };
    tempOutfits.splice(toRemove, 1);
    delete tempChecks[thisStyleID];
    delete storedCheckStyles[thisStyleID];

    localStorage.setItem('inUse', JSON.stringify(storedCheckStyles));
    localStorage.removeItem(thisStyleID);

    setCheckStyles(tempChecks);
    setMyOutfits(tempOutfits);
  };

  // =================== COMPONENT ===================
  return (
    <div className="prod-pic">
      {currentParentProductStyle && (
        <button
          className="btn remove-btn"
          onMouseEnter={() => setAllowCardClick(false)}
          onMouseLeave={() => setAllowCardClick(true)}
          onClick={handleRemoveOutfit}
          type="button"
        >
          <img src="../../../../assets/remove.png" alt="remove this product from your collection" />
        </button>
      )}
      {!currentParentProductStyle && (
        <button
          className="btn compare-btn"
          onMouseEnter={() => setAllowCardClick(false)}
          onMouseLeave={() => setAllowCardClick(true)}
          onClick={handleComparisonModal}
          type="button"
        ><img src="../../../../assets/compareStar.png" alt="opens a comparison modal" />
        </button>
      )}
      <img
        className="default-pic"
        src={picUrl}
        alt={`a sample of the ${thisProduct.name} product`}
      />
    </div>

  );
}
