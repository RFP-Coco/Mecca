import React from "react";
import BreakdownBar from "./BreakdownBar.jsx";

export default function RatingBreakdown({
  reviewMetadata,
  totalAmtOfReviews,
  toggleSelectedRating,
  selectedRatings,
  clear,
}) {
  const progress = Object.entries(reviewMetadata.ratings).map((entry) => [
    entry[0],
    entry[1] / totalAmtOfReviews,
    entry[1],
  ]);

  const currentFilters = Object.entries(selectedRatings)
    .filter((entry) => !!entry[1])
    .map((entry) => entry[0]);

  return (
    <div
      aria-label="product rating breakdown by stars"
      className="rating-breakdown"
    >
      {progress.map((entry) => {
        const percentage = Math.round(entry[1] * 100);
        return (
          <BreakdownBar
            key={entry[0]}
            onClick={toggleSelectedRating}
            entry={entry}
            percentage={percentage}
          />
        );
      })}

      <div className="filter-label">
        currently displaying:&nbsp;
        {currentFilters.length === 0 || currentFilters.length === 5
          ? "all"
          : `${currentFilters.join(", ")} star`}{" "}
        reviews
      </div>

      {Object.values(selectedRatings).some((selected) => selected === true) ? (
        <button className="clear-filters-btn" type="button" onClick={clear}>
          CLEAR ALL FILTERS
        </button>
      ) : null}
    </div>
  );
}
