import React from "react";

export default function BreakdownBar({ onClick, entry, percentage }) {
  return (
    <div
      key={entry[0]}
      className="rating-container"
      onClick={() => onClick(entry[0])}
    >
      <div className="rating-bar-label">{entry[0]} stars:</div>
      <div className="bar-container">
        <progress
          aria-label="rating percent"
          className="rating-bar"
          max="100"
          value={percentage}
        />
        <div className="rating-amt">{entry[2]} reviews</div>
      </div>
    </div>
  );
}
