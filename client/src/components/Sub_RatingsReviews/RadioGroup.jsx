import React from 'react';
import RadioButton from './RadioButton.jsx';

export default function RadioGroup({
  numButtons, name, labels,
}) {
  const nums = Array.from({ length: numButtons }, (_, i) => i + 1);

  return (
    <div className="radio-group">
      <div className="radio-group-name">{name}</div>
      {nums
        .map((num) => (
          <RadioButton
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
