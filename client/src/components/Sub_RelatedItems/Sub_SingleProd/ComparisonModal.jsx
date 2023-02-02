import React, { useState } from 'react';

export default function ComparisonModal({
  thisProduct, thisReviewMetadata,
  parentProduct, parentReviewMetadata,
  setAllowCardClick, setShowComparisonModal, getAvgRating,
}) {
  const thisAvgRating = getAvgRating(thisReviewMetadata.ratings)[0];
  const parentAvgRating = getAvgRating(parentReviewMetadata.ratings)[0];

  /*
    create a 'combined' array to hold data
    create a Set of keys from both characteristics objects
    iterate over the Set
    create a nested array of 'this' value, key, and 'parent' value,
      and push it to the combined array
      push 'null' if this or parent do not have that key

    [ [3.4, Quality, 3.7], [4.2, Fit, 3.8], [null, Length, 4.6] ]
    a mappable array where each nested array fills a <tr> with three <td>s
    can I convert these to Kevin's stars?
  */

  const allCharacteristics = [
    ...new Set(Object.keys(thisReviewMetadata.characteristics)
      .concat(Object.keys(parentReviewMetadata.characteristics))),
  ];

  const combinedStats = allCharacteristics.map((descriptor) => {
    const nested = [];
    const thisChar = thisReviewMetadata.characteristics;
    const parentChar = parentReviewMetadata.characteristics;
    let thisRating;
    let parentRating;

    if (thisChar[descriptor] && parentChar[descriptor]) {
      thisRating = Number(thisChar[descriptor].value).toFixed(2);
      parentRating = Number(parentChar[descriptor].value).toFixed(2);
      nested.push(thisRating, descriptor, parentRating);
    } else if (thisChar[descriptor]) {
      thisRating = Number(thisChar[descriptor].value).toFixed(2);
      nested.push(thisRating, descriptor, null);
    } else if (parentChar[descriptor]) {
      parentRating = Number(parentChar[descriptor].value).toFixed(2);
      nested.push(null, descriptor, parentRating);
    }

    return nested;
  });

  const handleMouseEnter = () => {
    setAllowCardClick(false);
  };

  const handleMouseLeave = () => {
    setAllowCardClick(true);
    // setShowComparisonModal(false);
  };

  return (
    <div
      className="comparison-modal"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <table className="comparison-modal-content">
        <tbody className="comparison-modal-header">
          <tr>
            <th>{thisProduct.name}</th>
            <th>vs.</th>
            <th>{parentProduct.name}</th>
          </tr>
          <tr className="overall-rating">
            <td>{thisAvgRating}</td>
            <td>Overall Rating</td>
            <td>{parentAvgRating}</td>
          </tr>
          {combinedStats.map((nestedStats, i) => (
            <tr key={i} className="additional-rating">
              <td>{nestedStats[0]}</td>
              <td>{nestedStats[1]}</td>
              <td>{nestedStats[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
