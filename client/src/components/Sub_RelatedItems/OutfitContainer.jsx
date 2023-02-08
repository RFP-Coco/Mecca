import React, { useState, useEffect, useRef } from 'react';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import { flushSync } from 'react-dom';
import SingleProd from './SingleProd.jsx';

export default function OutfitContainer({
  parentProduct, setParentProductID,
  parentProductStyle, currentParentProductStyle,
  parentReviewMetadata, setAsNewOverview, setAllowCardClick,
}) {
  // =================== STATES ===================
  const [myOutfits, setMyOutfits] = useState([]);
  const [checkStyles, setCheckStyles] = useState({});
  const [index, setIndex] = useState(0);
  const cardsRef = useRef(null);

  // =================== EFFECTS ===================
  useEffect(() => {
    if (localStorage.length) {
      const storedCheckStyles = JSON.parse(localStorage.getItem('inUse'));

      const storedKeys = Object.keys(localStorage);
      const checkStyleIdx = storedKeys.indexOf('inUse');

      console.log('\nstoredCheckStyles: ', storedCheckStyles);
      console.log('\nstoredKeys: ', storedKeys, '\ncheckStyleIdx: ', checkStyleIdx);

      storedKeys.splice(checkStyleIdx, 1);

      const storedOutfits = storedKeys.map((key) => (
        JSON.parse(localStorage.getItem(key))));

      setMyOutfits(storedOutfits);
      setCheckStyles(storedCheckStyles);
    }
  }, [localStorage]);

  // =================== HELPERS ===================
  const handleRightClick = () => {
    flushSync(() => {
      if (index < myOutfits.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });
    cardsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleLeftClick = () => {
    flushSync(() => {
      if (!index) {
        setIndex(myOutfits.length - 1);
      } else {
        setIndex(index - 1);
      }
    });
    cardsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleAddOutfit = (e) => {
    e.preventDefault();
    const { style_id, photos, original_price, sale_price } = currentParentProductStyle;
    const myOutfitEntry = Object.assign(parentProduct, { style_id, photos, original_price, sale_price });

    if (checkStyles[style_id]) return;

    setCheckStyles(Object.assign(checkStyles, checkStyles[style_id] = 1));
    setMyOutfits(myOutfits.concat([myOutfitEntry]));

    localStorage.setItem('inUse', JSON.stringify(checkStyles));
    localStorage.setItem(style_id, JSON.stringify(myOutfitEntry));
  };

  // =================== COMPONENT ===================
  return (
    <div className="scrollable container">
      {index > 0 && (
        <BiChevronLeftCircle
          className="scroll-left"
          onClick={handleLeftClick}
        />
      )}
      <AddOutfitCard
        parentProduct={parentProduct}
        myOutfits={myOutfits}
        setMyOutfits={setMyOutfits}
        handleAddOutfit={handleAddOutfit}
      />
      {myOutfits.map((thisProduct, i) => (
        <SingleProd
          key={thisProduct.style_id}
          ref={index === i ? cardsRef : null}
          thisImgUrl={thisProduct.photos[0].url}
          thisStyleID={thisProduct.style_id}
          original_price={thisProduct.original_price}
          sale_price={thisProduct.sale_price}
          parentProduct={parentProduct}
          setParentProductID={setParentProductID}
          parentProductStyle={parentProductStyle}
          parentReviewMetadata={parentReviewMetadata}
          currentParentProductStyle={currentParentProductStyle}
          thisProduct={thisProduct}
          setAllowCardClick={setAllowCardClick}
          setAsNewOverview={setAsNewOverview}
          myOutfits={myOutfits}
          setMyOutfits={setMyOutfits}
          checkStyles={checkStyles}
          setCheckStyles={setCheckStyles}
        />
      ))}
      {index < myOutfits.length - 1 && (
        <BiChevronRightCircle
          className="scroll-right"
          onClick={handleRightClick}
        />
      )}
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
