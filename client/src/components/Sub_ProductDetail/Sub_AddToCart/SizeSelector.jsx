import React, { useState, useEffect } from 'react';

function SizeSelector({ skuID, validSkus, startSelect, handleSize }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    if (!startSelect) {
      setShowAlert(true);
    }
  };

  useEffect(() => { setShowAlert(false); }, [startSelect]);

  return (
    <div className="size-selector">
      {showAlert && <div>please select a style</div>}
      <select
        role="listbox"
        name="size"
        value={skuID ? skuID.size : ''}
        onClick={handleClick}
        onChange={handleSize}
      >
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
