import React, { useState } from "react";
import RadioButton from "./RadioButton.jsx";

export default function RadioGroup({
  numButtons,
  name,
  labels,
  char_id,
  onClick,
}) {
  const nums = Array.from({ length: numButtons }, (_, i) => i + 1);

  return (
    <div className="radio-group">
      <div className="radio-group-name">{name}</div>
      {nums.map((num) => (
        <RadioButton
          key={`${name}-${num}`}
          char_id={char_id}
          onClick={onClick}
          id={`${name}-${num}`}
          name={name}
          value={num}
          labelText={num}
          subLabel={labels[num - 1]}
        />
      ))}
    </div>
  );
}
