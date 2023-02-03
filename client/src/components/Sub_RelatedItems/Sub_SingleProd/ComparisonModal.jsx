import React from 'react';
import generateStars from '../../Sub_RatingsReviews/generateStars.js';

export default function ComparisonModal({
  thisProduct, thisReviewMetadata,
  parentProduct, parentReviewMetadata,
  setAllowCardClick, setShowComparisonModal, getAvgRating,
}) {
  const thisAvgRating = getAvgRating(thisReviewMetadata.ratings)[0];
  const parentAvgRating = getAvgRating(parentReviewMetadata.ratings)[0];

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
  };

  return (
    <div
      className="comparison-modal"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="comparison-modal-content">
        <table>
          <tbody className="comparison-modal-body">
            <tr>
              <td>{null}</td>
              <td>{null}</td>
              <td>
                <img
                  className="remove-x"
                  src="../../../../assets/remove2.png"
                  alt="close this modal"
                  onClick={() => setShowComparisonModal(false)}
                />
              </td>
            </tr>
            <tr className="comparison-modal-header">
              <th>{thisProduct.name}</th>
              <th>vs.</th>
              <th>{parentProduct.name}</th>
            </tr>
            <tr className="overall-rating">
              <td>{generateStars(thisAvgRating, 5)}</td>
              <td>Overall Rating</td>
              <td>{generateStars(parentAvgRating, 5)}</td>
            </tr>
            {combinedStats.map((nestedStats, i) => (
              <tr key={i} className="additional-rating">
                <td>{nestedStats[0] ? generateStars(nestedStats[0], 5) : null}</td>
                <td>{nestedStats[1]}</td>
                <td>{nestedStats[2] ? generateStars(nestedStats[2], 5) : null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
