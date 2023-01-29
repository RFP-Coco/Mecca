import React from 'react';
import axios from 'axios';
import ReviewList from './Sub_RatingsReviews/ReviewList.jsx';

export default function RatingsReviews({ productID, reviewMetadata, product }) {
  const sort = 'helpful';
  // const url = `/api/reviews/?product_id=${productID}&page=1&count=5&sort=${sort}`;

  const [reviews, setReviews] = React.useState(null);
  React.useEffect(() => {
    const url = `/api/reviews/?product_id=${productID}&sort=${sort}`;
    axios.get(url)
      .then((results) => {
        setReviews(results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {reviews && <ReviewList reviews={reviews} />}
    </div>
  );
}
