import React, { useState } from 'react';
// import Slider from './Slider.jsx';

export default function ProductDashboard({
  reviewMetadata,
}) {
  const labels = {
    size: ['a size too small', 'half size too small', 'perfect', 'half size too big', 'a size too wide'],
    width: ['too narrow', 'slightly narrow', 'perfect', 'slightly wide', 'too wide'],
    comfort: ['uncomfortable', 'slightly uncomfortable', 'just ok', 'comfortable', 'perfect'],
    quality: ['very poor', 'below average', 'what i expected', 'pretty great', 'perfect'],
    length: ['runs short', 'runs slightly short', 'perfect', 'runs slightly long', 'runs long'],
    fit: ['runs tight', 'runs slightly tight', 'perfect', 'runs slightly long', 'runs long'],
  };

  const { characteristics } = reviewMetadata;

  return (
    <div className="review-product-dashboard">
      {Object.entries(characteristics)
        .map((characteristic) => (
          <div className="characteristic">
            <div
              key={characteristic[1].id}
              className="characteristic-name"
            >
              {characteristic[0]}
            </div>
            <div className="characteristics-slider">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={characteristic[1].value}
                list="labels"
                readOnly
              />
              <datalist id="labels">
                {labels[characteristic[0].toLowerCase()]
                  .map((label, index) => (
                    <option
                      className="characteristics-label"
                      value={index + 1}
                      label={label}
                    />
                  ))}
              </datalist>
            </div>
          </div>
        ))}
    </div>
  );
}
