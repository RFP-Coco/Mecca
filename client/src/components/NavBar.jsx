import React from 'react';
import './Sub_NavBar/navbar.css'

export default function NavBar({
  reviewRef, qnaRef, relItemRef, overviewRef,
  headRef,
}) {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="nav-bar">
      <div onClick={() => handleClick(overviewRef)}>Product Overview</div>
      <div onClick={() => handleClick(relItemRef)}>Related Items</div>
      <div onClick={() => handleClick(qnaRef)}>Questions & Answers</div>
      <div onClick={() => handleClick(reviewRef)}>Ratings & Reviews</div>
      <div onClick={() => handleClick(headRef)}>Top</div>
    </div>
  );
}
