import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import ProductDetail from './ProductDetail.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews.jsx';

function App() {
  // props for multiple widgets
  // states that multiple widgets need access to

  const [productID, setProductID] = useState(40350);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productStyle, setProductStyle] = useState({});
  const [reviewMetadata, setReviewMetadata] = useState({});
  const reviewRef = useRef(null);
  const [currentStyle, setCurrentStyle] = useState();

  console.log('productID: ', productID);

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
      { Object.keys(productStyle).length && (
      <ProductDetail
        reviewMetadata={reviewMetadata}
        productStyle={productStyle}
        product={currentProduct}
        productID={productID}
        reviewRef={reviewRef}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
      />
      )}
      <RelatedItems
        reviewMetadata={reviewMetadata}
        productStyle={productStyle}
        product={currentProduct}
        productID={productID}
        setProductID={setProductID}
        currentStyle={currentStyle}
      />
      <QuestionsAnswers
        productID={productID}
        productName={currentProduct.name}
      />
      {Object.keys(reviewMetadata).length !== 0
      && (
      <RatingsReviews
        productID={productID}
        reviewMetadata={reviewMetadata}
        product={currentProduct}
        reviewRef={reviewRef}
      />
      )}
    </div>
  );
}

export default App;
