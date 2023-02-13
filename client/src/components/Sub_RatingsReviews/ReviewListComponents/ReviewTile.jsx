import React, { useState, useEffect } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { parseISO, format } from 'date-fns';
import ThumbnailModal from './ThumbnailModal.jsx';
import generateStars from '../generateStars.js';

export default function ReviewTile({
  review, handleHelpfulClick,
}) {
  /**
   * States
   * @type {boolean}
   * @type {function}
   */
  const [showMoreBody, setShowMoreBody] = useState(false);
  const [expandThumbnail, setExpandThumbnail] = useState(false);
  const [currExpandedImg, setCurrExpandedImg] = useState(false);

  useEffect(() => {
    if (expandThumbnail) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [expandThumbnail]);

  /** @type {string} date */
  const date = format(parseISO(review.date), 'LLLL d, yyyy');

  /**
   * Constants
   * @type {number}
   */
  const maxSummaryLength = 60;
  const defaultBodyLength = 250;

  /** @type {string} */
  const summary = review.summary.length > maxSummaryLength
    ? review.summary.slice(0, maxSummaryLength)
    : review.summary;

  /** @type {function} */
  const handleThumbnailClick = (event) => {
    const imgUrl = event.target.src;
    setCurrExpandedImg(imgUrl);
    setExpandThumbnail(true);
  };

  return (
    <li aria-label="an individual review" className="review-tile">
      <div className="stars-name-date-container">
        <div aria-label="review star rating" className="stars">
          {generateStars(review.rating, review.rating, 25)}
        </div>
        <div className="review-top-corner">
          <p aria-label="reviewer username" className="reviewer-name">{review.reviewer_name}</p>
          <small aria-label="review timestamp" className="review-date">{date}</small>
        </div>

      </div>

      <b aria-label="review summary" className="review-summary">{summary}</b>
      <p aria-label="review body" className="review-body">{!showMoreBody
        ? review.body.slice(0, defaultBodyLength)
        : review.body}
      </p>
      {review.body.length > defaultBodyLength && !showMoreBody
        ? <button aria-label="show more review body text" type="button" onClick={() => setShowMoreBody(true)}>Show More</button>
        : null}
      <div aria-label="individual review photos" className="review-photos">
        {review.photos.length > 0
          ? review.photos.map((img) => (
            <img
              className="review-thumbnail"
              key={img.id}
              src={img.url}
              alt="user uploaded img"
              onClick={(event) => handleThumbnailClick(event)}
            />
          ))
          : null}
      </div>
      {expandThumbnail && currExpandedImg !== null && (
      <ThumbnailModal
        imgUrl={currExpandedImg}
        expand={setExpandThumbnail}
        setCurrImg={setCurrExpandedImg}
      />
      )}
      {review.recommend
      && (
      <small aria-label="user recommends product" className="review-recommend">
        I recommend this product
        <IoMdCheckmarkCircleOutline />
      </small>
      )}
      {review.response && <p aria-label="response from seller" className="review-response">Response From Seller: {review.response}</p>}
      <div className="review-helpfulness">
        Was this review helpful?&nbsp;
        <a
          aria-label="Mark a review helpful"
          href=""
          onClick={(event) => handleHelpfulClick(event, review)}
        >{review.helpfulness}
        </a>
      </div>
    </li>
  );
}
