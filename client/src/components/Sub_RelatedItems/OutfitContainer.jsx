import React, { useState, useEffect } from 'react';
import SingleProd from './SingleProd.jsx';

export default function OutfitContainer({
  parentProduct, parentProductID, setParentProductID,
  parentProductStyle, currentParentProductStyle, parentReviewMetadata, setAsNewOverview, setAllowCardClick,
}) {

  // const { id } = thisProduct;

  const [myOutfits, setMyOutfits] = useState(new Set());
  const [outfitsUpdated, setOutfitsUpdated] = useState(false);

  useEffect(() => {
    // if (myOutfits.size) handleAddOutfit();
    // renderOutfits();
    if (myOutfits.size) {
      setMyOutfits(myOutfits.add(parentProduct));
      setOutfitsUpdated(false);
    }
  }, [outfitsUpdated]);


  const handleAddOutfit = (e) => {
    e.preventDefault();
    // const { style_id } = currentParentProductStyle;
    // console.log(`i'ma add ${style_id} to your collection`);
    // setMyOutfits(myOutfits.add(currentParentProductStyle));

    const { name } = parentProduct;
    console.log(`i'ma add ${name} to your collection`);

    setMyOutfits(myOutfits.add(parentProduct));
    setOutfitsUpdated(true);
  };

  return (
    <div className="scrollable container">
      <AddOutfitCard
        parentProduct={parentProduct}
        // currentParentProductStyle={currentParentProductStyle}
        myOutfits={myOutfits}
        setMyOutfits={setMyOutfits}
        handleAddOutfit={handleAddOutfit}
      />
      {[...myOutfits].map((thisProduct) => (
        <SingleProd
          key={thisProduct.id}
          parentProduct={parentProduct}
          setParentProductID={setParentProductID}
          parentProductStyle={parentProductStyle}
          parentReviewMetadata={parentReviewMetadata}
          thisProduct={thisProduct}
          setAllowCardClick={setAllowCardClick}
          setAsNewOverview={setAsNewOverview}
        />
      ))}
    </div>
  );
}

function AddOutfitCard({
  parentProduct, myOutfits, handleAddOutfit,
  setMyOutfits /* currentParentProductStyle */ }) {

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
