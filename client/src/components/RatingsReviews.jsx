import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sub_RatingsReviews/styles/ratings.css";
import ReviewList from "./Sub_RatingsReviews/ReviewListComponents/ReviewList.jsx";
import Dashboard from "./Sub_RatingsReviews/Dashboard.jsx";
import ReviewModal from "./Sub_RatingsReviews/FormComponents/ReviewModal.jsx";

export default function RatingsReviews({
  productID,
  reviewMetadata,
  product,
  reviewRef,
}) {
  // STATES
  const [sort, setSort] = useState("relevant");
  const [showModal, setShowModal] = useState(false);

  const [selectedRatings, setSelectedRatings] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [reviews, setReviews] = useState(null);
  const [filtered, setFiltered] = useState(false);

  const clearFilters = () => {
    setSelectedRatings({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    });
  };

  // EFFECTS
  const updateData = () => {
    const url = `/api/reviews/?product_id=${productID}&sort=${sort}&count=50`;
    axios
      .get(url)
      .then((results) => {
        setReviews(results.data);
      })
      .catch((err) => console.log(err));
  };

  // render new review list on sort change
  useEffect(() => {
    updateData();
  }, [sort]);

  // on product change, pull new reviews + clear active filters
  useEffect(() => {
    updateData();
    clearFilters();
    setSort("relevant");
  }, [productID]);

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
  }, [showModal]);

  useEffect(() => {
    if (
      Object.values(selectedRatings).every((selected) => selected === false)
    ) {
      setFiltered(false);
    }
  }, [selectedRatings]);

  // HANDLERS
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const toggleSelectedRating = (starAmt) => {
    setSelectedRatings({
      ...selectedRatings,
      [starAmt]: !selectedRatings[starAmt],
    });
    setFiltered(true);
  };

  const totalAmtOfReviews = Object.values(reviewMetadata.ratings).reduce(
    (accumulator, currrent) => Number(currrent) + accumulator,
    0
  );

  const totalStarRating = Object.entries(reviewMetadata.ratings)
    .map((entry) => Number(entry[0]) * Number(entry[1]))
    .reduce((accumulator, current) => accumulator + current, 0);

  return (
    <div className="ratings-reviews" ref={reviewRef}>
      <h3>Ratings & Reviews</h3>
      {showModal && (
        <ReviewModal
          reviewMetadata={reviewMetadata}
          setShowModal={setShowModal}
          product={product}
          update={updateData}
        />
      )}
      <div className="ratings-reviews-body">
        {reviews && reviewMetadata && (
          <Dashboard
            totalStarRating={totalStarRating}
            totalAmtOfReviews={totalAmtOfReviews}
            clear={clearFilters}
            selectedRatings={selectedRatings}
            toggleSelectedRating={toggleSelectedRating}
            setSelectedRatings={setSelectedRatings}
            reviewMetadata={reviewMetadata}
            reviews={reviews}
          />
        )}
        {reviews && reviewMetadata && (
          <ReviewList
            totalAmtOfReviews={totalAmtOfReviews}
            setShowModal={setShowModal}
            filtered={filtered}
            selectedRatings={selectedRatings}
            sort={sort}
            onChange={handleSortChange}
            reviews={reviews}
            update={updateData}
          />
        )}
      </div>
    </div>
  );
}
