import React from 'react';

export default function ComparisonModal({
  thisProduct, theseStyles, thisAvgRating, thisPrice,
  parentProduct, productStyle, reviewMetadata,
  setAllowCardClick, setShowComparisonModal
}) {

  // const
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
        <tr className="comparison-modal-header">
          <th>{thisProduct.name}</th>
          <th>vs.</th>
          <th>{parentProduct.name}</th>
        </tr>
        <tr>
          {/* compare price & ratings */}
          <td>{thisAvgRating.toFixed(2)}</td>
          <td>Average Rating</td>
          <td></td>
        </tr>

      </table>
    </div>
  );
};
