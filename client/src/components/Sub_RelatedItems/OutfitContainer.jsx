import React from 'react';

export default function OutfitContainer({
  parentProduct, parentProductID, setParentProductID,
  parentProductStyle, parentReviewMetadata,
  setAsNewOverview, setAllowCardClick
}) {

  // const { id } = thisProduct;


  const addOutfitPic = "../../../../assets/addToOutfit.png";

  const handleAddOutfit = (id) => {
    // add the current displayed outfit
    // get by STYLE id
  };

  return (
    <div className="scrollable container">
      <div className="single-prod container">
        <img
          className="add-outfit"
          onClick={handleAddOutfit}
          src={addOutfitPic}
          alt="add the current product to your collection"
        />
      </div>
      {/* map the rest */}
    </div>
  );
}
