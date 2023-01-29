import React from 'react';

export default function ReviewList({ reviews }) {
  const [displayedReviews, setDisplayedReviews] = React.useState(2);

  const render = [];
  for (let i = 0; i < displayedReviews; i += 1) {
    render.push(reviews.results[i]);
  }

  return (
    <ul>
      {render.map((review) => <li className="reviewListEntry">{review.summary} </li>)}
    </ul>
  );
}
