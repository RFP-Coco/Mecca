import React from 'react';

function SizeSelector({ skuID, validSkus, startSelect, handleSize }) {
  return (
    <div className="size-selector">
      <select name="size" value={skuID ? skuID.size : ''} onChange={handleSize}>
        <option value="" disabled>
          {startSelect && !validSkus.length ? 'OUT OF STOCK' : 'SELECT SIZE'}
        </option>
        {startSelect
        && validSkus.map(
          (entry) => <option key={entry[0]} value={entry[0]}>{entry[1].size}</option>,
        )}
      </select>
    </div>
  );
}

export default SizeSelector;
