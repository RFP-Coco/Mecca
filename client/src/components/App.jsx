import React from 'react';
import ProductDetail from './ProductDetail.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews.jsx';

const App = (/*props for multiple widgets*/) => {
// states that multiple widgets need access to

  return (
    <div>
      <p>Hello from Team Coco</p>
      <ProductDetail />
      <RelatedItems />
      <QuestionsAnswers />
      <RatingsReviews />
    </div>
  );
};

export default App;
