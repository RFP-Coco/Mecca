import React from 'react';
import StyleEntry from './StyleEntry.jsx';

function StyleList({ productStyle, currentStyle, setCurrentStyle, startSelect, setStartSelect }) {
  return (
    <div aria-label="select a style" className="style-list-container">
      {productStyle.results.map((style) => (
        <StyleEntry
          style={style}
          key={style.style_id}
          setCurrentStyle={setCurrentStyle}
          currentStyle={currentStyle}
          startSelect={startSelect}
          setStartSelect={setStartSelect}
        />
      ))}
    </div>
  );
}
export default StyleList;
