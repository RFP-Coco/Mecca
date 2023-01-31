import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDetail from './ProductDetail.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews.jsx';

function App() {
  // props for multiple widgets
  // states that multiple widgets need access to

  const [productID, setProductID] = useState(40348);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productStyle, setProductStyle] = useState({});
  const [reviewMetadata, setReviewMetadata] = useState({});

  useEffect(() => {
    const urls = [
      `/api/products/${productID}`, // get products by id
      `/api/products/${productID}/styles`, // get styles by product id
      `/api/reviews/meta?product_id=${productID}`, // get review metadata by id
    ];
    const requests = urls.map((url) => axios.get(url));

    axios.all(requests)
      .then((responses) => {
        setCurrentProduct(responses[0].data);
        setProductStyle(responses[1].data);
        setReviewMetadata(responses[2].data);
      });
  }, [productID]);

  return (
    <div>
      {/* <p>Hello from Team Coco</p> */}
      { Object.keys(productStyle).length !== 0  && <ProductDetail
        reviewMetadata={reviewMetadata}
        productStyle={productStyle}
        product={currentProduct}
      />}
      <RelatedItems
        reviewMetadata={reviewMetadata}
        productStyle={productStyle}
        product={currentProduct}
        productID={productID}
        setProductID={setProductID}
      />
      <QuestionsAnswers productID={productID} />
      {reviewMetadata
      && (
      <RatingsReviews
        productID={productID}
        reviewMetadata={reviewMetadata}
        product={currentProduct}
      />
      )}
    </div>
  );
}

export default App;
