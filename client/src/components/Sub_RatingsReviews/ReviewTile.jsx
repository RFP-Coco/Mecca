import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { parseISO, format } from 'date-fns';

export default function ReviewTile({ review, reviewMetadata }) {
  const [showMoreBody, setShowMoreBody] = useState(false);

  const { recommended } = reviewMetadata
  console.log(recommended, 'recommended')
  const rating = new Array(review.rating).fill(0, (value, index) => index + 1);
  const date = format(parseISO(review.date), 'LLLL d, yyyy');

  // limit max summary length to 60 chars
  const maxSummaryLength = 60;
  const summary = review.summary.length > maxSummaryLength
    ? review.summary.slice(0, maxSummaryLength)
    : review.summary;

  const defaultBodyLength = 250;

  return (
    <li className="review-tile">
      <b className="review-summary">{summary}</b>
      <p className="reviewer-name">{review.reviewer_name}</p>
      <small className="review-date">{date}</small>
      <div className="stars">
        {rating.map((star, index) => <div className="star" key={index} />)}
      </div>
      <p>{!showMoreBody
        ? review.body.slice(0, defaultBodyLength)
        : review.body}
      </p>
      {review.body.length > 250 && !showMoreBody
        ? <button type="button" onClick={() => setShowMoreBody(true)}>Show More</button>
        : null}
      <div className="review-photos">
        {review.photos.length > 0
          ? review.photos.map((img) => <img className="review-thumbnail" key={img.id} src={img.url} alt="" />)
          : null}
      </div>
      {review.recommend
      && (
      <small className="review-recommend">
        I recommend this product
        <IoMdCheckmarkCircleOutline />
      </small>
      )}
      {review.response && <p className="review-response">Response From Seller: {review.response}</p>}
      <div className="review-helpfulness">
        Was this review helpful?
      </div>
    </li>
  );
}
