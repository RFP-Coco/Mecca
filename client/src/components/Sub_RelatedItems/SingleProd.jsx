import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProdImg from './Sub_SingleProd/ProdImg.jsx';
import ProdInfo from './Sub_SingleProd/ProdInfo.jsx';
import ComparisonModal from './Sub_SingleProd/ComparisonModal.jsx';

export default function SingleProd({
  thisProduct, parentProduct, productID, productStyle, reviewMetadata, onClick, setAllowCardClick,
}) {
  const { id } = thisProduct;

  // =================== STATES ===================

  const [theseStyles, setTheseStyles] = useState([]);

  const [thisPrice, setThisPrice] = useState([]);

  const [thisAvgRating, setThisAvgRating] = useState([]);

  const [imgUrl, setImgUrl] = useState('');

  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const [thisReviewMeta, setThisReviewMeta] = useState({});

  // =================== EFFECTS ===================

  useEffect(() => {
    axios.get(`/api/products/${id}/styles`)
      .then((styles) => {
        const newStyles = styles.data.results;
        setTheseStyles(newStyles);
        setImgUrl('');
        setImgUrl(newStyles[0].photos[0].url);
        return newStyles.filter(style => style['default?'] === true);
      })
      .then((defaultStyle) => {
        setPrice(defaultStyle);
      })
      .catch((err) => err);

    axios.get(`/api/reviews/meta?product_id=${id}`)
      .then((reviewMeta) => {
        const avg = getAvg(reviewMeta.data);
        setThisAvgRating(avg);
        setThisReviewMeta(reviewMeta.data);
      })
      .catch((err) => err);
    setShowComparisonModal(false);
  }, [id]);

  // =================== HELPERS ===================

  // if we need to find the first available img
  // const setImg = () => {
  //       setImgUrl('');
  //       setImgUrl(newStyles[0].photos[0].url);
  // };

  const setPrice = (style) => {
    const find = style[0];

    if (!style.length) {
      setThisPrice([thisProduct.default_price, null]);
    }

    if (find.sale_price) {
      setThisPrice([find.sale_price, find.original_price]);
    } else {
      setThisPrice([find.original_price, null]);
    }
  };

  const getAvg = ({ ratings }) => {
    let totalRatings = 0;
    let sum = 0;

    for (const num in ratings) {
      sum += Number(num) * ratings[num];
      totalRatings += Number(ratings[num]);
    }

    return [sum / totalRatings, totalRatings];
  };
  // =================== HANDLERS ===================
  const handleOutsideClick = () => {
    return null;
  };

  // =================== COMPONENT ===================
  return (
    <div
      className="single-prod container"
      onClick={() => onClick(id)}
    >
      {showComparisonModal
        ? (
          <ComparisonModal
            thisProduct={thisProduct}
            theseStyles={theseStyles}
            thisAvgRating={thisAvgRating}
            thisPrice={thisPrice}
            thisReviewMeta={thisReviewMeta}
            parentProduct={parentProduct}
            productStyle={productStyle}
            reviewMetadata={reviewMetadata}
            setAllowCardClick={setAllowCardClick}
            setShowComparisonModal={setShowComparisonModal}
          />
        )
        : null}
      <ProdImg
        defaultPic={imgUrl}
        thisProduct={thisProduct}
        setAllowCardClick={setAllowCardClick}
        showComparisonModal={showComparisonModal}
        setShowComparisonModal={setShowComparisonModal}
      />
      <ProdInfo
        thisProduct={thisProduct}
        thisPrice={thisPrice}
        thisAvgRating={thisAvgRating}
      />
    </div>
  );
}
