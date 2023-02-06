import React from 'react';

export default function RadioButton({
  id, name, value, labelText, subLabel, onClick, char_id,
}) {
  return (
    <div className="radio-btn">
      <label className="radio-btn-label" htmlFor={id}>
        <input
          required
          onClick={(event) => onClick(event, char_id)}
          className="radio-input"
          type="radio"
          id={id}
          name={name}
          value={value}
        />
        <span className="radio-label-text">
          {labelText}
        </span>
      </label>
      <div className={`${id}-meaning`}>{subLabel}</div>
    </div>
  );
}
