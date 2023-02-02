import React from 'react';
import uuid4 from 'uuid4';
import Star from './Star.jsx';

export default function generateStars(rating, amtStars, size = 25) {
  const result = [];
  let remaining = rating;
  let counter = 0;
  while (counter < amtStars) {
    if (remaining - 1 >= 0) {
      remaining -= 1;
      result.push(1);
    } else if (remaining - 1 <= 0) {
      result.push(remaining);
      remaining = 0;
    }
    counter += 1;
  }

  return result
    .map((percent, index) => (
      <Star
        size={size}
        key={`star_${index}`}
        percentage={percent}
        id={uuid4()}
      />
    ));
}
