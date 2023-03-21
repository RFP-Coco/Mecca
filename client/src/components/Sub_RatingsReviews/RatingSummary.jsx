import React, { useState, useEffect } from "react";
import "../../../dist/assets/ratings/star.svg";
import Star from "./Star.jsx";
import generateStars from "./generateStars.js";

export default function RatingSummary({ avgStarRating, reviewMetadata }) {
  const { recommended } = reviewMetadata;
  const totalReviews = Number(recommended.true) + Number(recommended.false);

  const percentRecommended = (Number(recommended.true) / totalReviews) * 100;

  return (
    <div className="rating-summary">
      <h2 className="star-rating">{avgStarRating}</h2>
      <span>
        {" "}
        {percentRecommended.toFixed(0)} % of reviewers recommend this product
      </span>
      <div className="stars">
        {avgStarRating !== null && generateStars(avgStarRating, 5, 30)}
      </div>
    </div>
  );
}
