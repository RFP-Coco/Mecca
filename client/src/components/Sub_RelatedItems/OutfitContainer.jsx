import React, { useState, useEffect } from 'react';
import SingleProd from './SingleProd.jsx';

export default function OutfitContainer({
  parentProduct, setParentProductID,
  parentProductStyle, currentParentProductStyle,
  parentReviewMetadata, setAsNewOverview, setAllowCardClick,
}) {

  // const { id } = thisProduct;

  // const [myOutfits, setMyOutfits] = useState(new Set());

  const [myOutfits, setMyOutfits] = useState([]);
  const [checkStyles, setCheckStyles] = useState({});

  const [outfitsUpdated, setOutfitsUpdated] = useState(false);

  useEffect(() => {
    if (myOutfits.length) {
      setOutfitsUpdated(false);
    }
  }, [outfitsUpdated]);

  const handleAddOutfit = (e) => {
    e.preventDefault();
    const { style_id } = currentParentProductStyle;
    const myOutfitEntry = Object.assign(parentProduct, { style_id });

    if (checkStyles[style_id]) return;

    setCheckStyles(Object.assign(checkStyles, checkStyles[style_id] = 1));

    setMyOutfits(myOutfits.concat([myOutfitEntry]));
    setOutfitsUpdated(true);
  };

  return (
    <div className="scrollable container">
      <AddOutfitCard
        parentProduct={parentProduct}
        myOutfits={myOutfits}
        setMyOutfits={setMyOutfits}
        handleAddOutfit={handleAddOutfit}
      />
      {myOutfits.map((thisProduct) => (
        <SingleProd
          key={thisProduct.id}
          parentProduct={parentProduct}
          setParentProductID={setParentProductID}
          parentProductStyle={parentProductStyle}
          parentReviewMetadata={parentReviewMetadata}
          currentParentProductStyle={currentParentProductStyle}
          thisProduct={thisProduct}
          setAllowCardClick={setAllowCardClick}
          setAsNewOverview={setAsNewOverview}
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
