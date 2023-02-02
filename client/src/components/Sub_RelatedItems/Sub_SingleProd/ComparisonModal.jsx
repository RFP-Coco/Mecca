import React, { useState } from 'react';

export default function ComparisonModal({
  thisProduct, thisReviewMetadata,
  parentProduct, parentReviewMetadata,
  setAllowCardClick, setShowComparisonModal, getAvgRating,
}) {
  const thisAvgRating = getAvgRating(thisReviewMetadata)[0];
  const parentAvgRating = getAvgRating(parentReviewMetadata)[0];

  const characteristicsCompare = [
    thisReviewMetadata.characteristics, parentReviewMetadata.characteristics
  ];

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
          <tr>
            {/* compare price & ratings */}
            <td>Overall: {thisAvgRating}</td>
            <td>{thisAvgRating && parentAvgRating ? '✔' : null}</td>
            <td>Overall: {parentAvgRating}</td>
          </tr>
          {/* <tr>
            {characteristicsCompare.map(characteristic, i, collection => {
              for (const key in characteristic) {
                if (characteristic[key] && collection[i][key]) {
                  return (
                    <td>{characteristic}: {characteristic[key]}</td>
                    <td>✔</td>
                    <td>{collection[i]}: {collection[i][key]}</td>
                  );
                } else if (characteristic[key] && !collection[i][key]) {
                  return (
                    <td>{characteristic}: {characteristic[key]}</td>
                    <td>{null}</td>
                    <td>{null}</td>
                  );
                }
              }
            })
            }
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
