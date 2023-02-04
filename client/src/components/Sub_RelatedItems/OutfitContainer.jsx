import React, { useState, useEffect } from 'react';
import SingleProd from './SingleProd.jsx';

export default function OutfitContainer({
  parentProduct, setParentProductID,
  parentProductStyle, currentParentProductStyle,
  parentReviewMetadata, setAsNewOverview, setAllowCardClick,
}) {
  const [myOutfits, setMyOutfits] = useState(new Set());

  useEffect(() => {
    if (myOutfits.size) {
      setMyOutfits(myOutfits.add(parentProduct));
      // setMyOutfits(myOutfits.add(generateOutfitObj()));
    }
  }, [myOutfits]);

  const handleAddOutfit = (e) => {
    e.preventDefault();
    setMyOutfits(myOutfits.add(parentProduct));
    // setMyOutfits(myOutfits.add(generateOutfitObj()));
  };

  const handleRemoveOutfit = (e) => {
    e.preventDefault();
    // setMyOutfits(myOutfits.delete(parentProduct));
    // setMyOutfits(myOutfits.delete());
  };

  // const generateOutfitObj = () => {
  //   const addOn = { style_id: currentParentProductStyle.style_id };

  //   return Object.create(parentProduct, addOn);
  // };

  return (
    <div className="scrollable container">
      <AddOutfitCard
        parentProduct={parentProduct}
        myOutfits={myOutfits}
        setMyOutfits={setMyOutfits}
        handleAddOutfit={handleAddOutfit}
      />
      {[...myOutfits].map((thisProduct) => (
        <SingleProd
          key={currentParentProductStyle.style_id}
          parentProduct={parentProduct}
          setParentProductID={setParentProductID}
          parentProductStyle={parentProductStyle}
          parentReviewMetadata={parentReviewMetadata}
          currentParentProductStyle={currentParentProductStyle}
          thisProduct={thisProduct}
          setAllowCardClick={setAllowCardClick}
          setAsNewOverview={setAsNewOverview}
          handleRemoveOutfit={handleRemoveOutfit}
        />
      ))}
    </div>
  );
}

function AddOutfitCard({ handleAddOutfit }) {
  const addOutfitPic = '../../../../assets/addToOutfit.png';

  return (
    <div className="single-prod container add-outfit">
      <img
        onClick={handleAddOutfit}
        className="add-outfit"
        src={addOutfitPic}
        alt="add the current product to your collection"
      />
    </div>
  );
}
