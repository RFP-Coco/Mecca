import React from 'react';

export default function RadioButton({
  id, name, value, labelText,
}) {
  return (
    <label htmlFor={id}>
      <input
        className="radio-btn"
        type="radio"
        id={id}
        name={name}
        value={value}
      />
      {labelText}
    </label>
  );
}
