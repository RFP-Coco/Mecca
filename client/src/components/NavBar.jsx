import React, { useState, useEffect } from 'react';
import './Sub_NavBar/navbar.css';

export default function NavBar({
  reviewRef, qnaRef, relItemRef, overviewRef,
  headRef,
}) {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={scrollPosition > 112 ? 'nav-bar scrolled' : 'nav-bar'}>
      <div onClick={() => handleClick(overviewRef)}>Product Overview</div>
      <div onClick={() => handleClick(relItemRef)}>Related Items</div>
      <div onClick={() => handleClick(qnaRef)}>Questions & Answers</div>
      <div onClick={() => handleClick(reviewRef)}>Ratings & Reviews</div>
      <div onClick={() => handleClick(headRef)}>Top</div>
    </div>
  );
}
