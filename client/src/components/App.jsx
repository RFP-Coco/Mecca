import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';

import axios from 'axios';

import ProductDetail from './ProductDetail.jsx';
import RelatedItems from './RelatedItems.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import RatingsReviews from './RatingsReviews.jsx';
import TrackerContext from '../utilities/TrackerContext.js';

function App() {
  const trackClick = useContext(TrackerContext);
  const [productID, setProductID] = useState(40349);
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
    <div id="global">
      <div id="ProductOverview" onClick={trackClick}>
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
      </div>
      <div id="RelatedProducts" onClick={trackClick}>
        <RelatedItems
          reviewMetadata={reviewMetadata}
          productStyle={productStyle}
          product={currentProduct}
          productID={productID}
          setProductID={setProductID}
          currentStyle={currentStyle}
        />
      </div>
      <div id="QA" onClick={trackClick}>
        <QuestionsAnswers
          productID={productID}
          productName={currentProduct.name}
        />
      </div>
      <div id="RatingsAndReviews" onClick={trackClick}>
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
    </div>
  );
}

export default App;
