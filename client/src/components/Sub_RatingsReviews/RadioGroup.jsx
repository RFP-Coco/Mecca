import React from 'react';
import RadioButton from './RadioButton.jsx';

export default function RadioGroup({
  numButtons, name, labels,
}) {
  const nums = Array.from({ length: numButtons }, (_, i) => i + 1);

  return (
    <div className="radio-group">
      {nums
        .map((num) => (
          <RadioButton
            id={`${name}-${num}`}
            name={name}
            value={num}
            labelText={num}
          />
        ))}
    </div>
  );
}
