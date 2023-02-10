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
    <li className="review-tile">
      <div className="stars-name-date-container">
        <div className="stars">
          {generateStars(review.rating, review.rating, 25)}
        </div>
        <div className="review-top-corner">
          <p className="reviewer-name">{review.reviewer_name}</p>
          <small className="review-date">{date}</small>
        </div>

      </div>

      <b className="review-summary">{summary}</b>
      <p>{!showMoreBody
        ? review.body.slice(0, defaultBodyLength)
        : review.body}
      </p>
      {review.body.length > defaultBodyLength && !showMoreBody
        ? <button type="button" onClick={() => setShowMoreBody(true)}>Show More</button>
        : null}
      <div className="review-photos">
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
      <small className="review-recommend">
        I recommend this product
        <IoMdCheckmarkCircleOutline />
      </small>
      )}
      {review.response && <p className="review-response">Response From Seller: {review.response}</p>}
      <div className="review-helpfulness">
        Was this review helpful?&nbsp;
        <a
          href=""
          onClick={(event) => handleHelpfulClick(event, review)}
        >{review.helpfulness}
        </a>
      </div>
    </li>
  );
}
