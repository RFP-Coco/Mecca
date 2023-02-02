import React from 'react';

export default function ComparisonModal({
  thisProduct, parentProduct, theseStyles, thisAvgRating, productStyle, reviewMetadata
}) {

  return (
    <div className="comparison-modal">
      <div className="comparison-modal-content">
        <div className="comparison-modal-header">
          Comparing {thisProduct.name} with {parentProduct.name}
        </div>
      </div>
    </div>
  );
};
