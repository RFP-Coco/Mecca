import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react';

import axios from 'axios';
import Head from './Head.jsx';
import NavBar from './NavBar.jsx';
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
  const headRef = useRef(null);
  const reviewRef = useRef(null);
  const qnaRef = useRef(null);
  const relItemRef = useRef(null);
  const overviewRef = useRef(null);
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
      <div id="Head" onClick={trackClick} ref={headRef}>
        <Head />
      </div>
      <NavBar
        reviewRef={reviewRef}
        qnaRef={qnaRef}
        relItemRef={relItemRef}
        overviewRef={overviewRef}
        headRef={headRef}
      />
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
          overviewRef={overviewRef}
        />
        )}
      </div>
      <div id="RelatedProducts" onClick={trackClick} >
        <RelatedItems
          reviewMetadata={reviewMetadata}
          productStyle={productStyle}
          product={currentProduct}
          productID={productID}
          setProductID={setProductID}
          currentStyle={currentStyle}
          relItemRef={relItemRef}
        />
      </div>
      <div id="QA" onClick={trackClick}>
        <QuestionsAnswers
          productID={productID}
          productName={currentProduct.name}
          qnaref={qnaRef}
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
