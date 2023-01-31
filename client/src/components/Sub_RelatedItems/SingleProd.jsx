import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProdImg from './Sub_SingleProd/ProdImg.jsx';
import ProdInfo from './Sub_SingleProd/ProdInfo.jsx';

function SingleProd({ product, setProductID, productStyle, reviewMetadata, onClick }) {

  // =================== STATES ===================

  const [theseStyles, setTheseStyles] = useState([]);

  const [thisPrice, setThisPrice] = useState([]);

  const [thisAvgRating, setThisAvgRating] = useState([]);

  const [imgUrl, setImgUrl] = useState('');

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
      })
      .catch((err) => err);
  }, []);

  // =================== HELPERS ===================
  const { id } = product;

  // if we need to find the first available img
  // const setImg = () => {
  //       setImgUrl('');
  //       setImgUrl(newStyles[0].photos[0].url);
  // };

  const setPrice = (style) => {
    const find = style[0];

    if (!style.length) {
      setThisPrice([product.default_price, null]);
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
  const handleClick = () => onClick(id);

  // =================== COMPONENT ===================
  return (
    <button type="button" className="btn card-btn" onClick={handleClick}>
      <ProdImg
        className="prod-pic"
        defaultPic={imgUrl}
        product={product}
      />
      <ProdInfo
        className="prod-info"
        product={product}
        thisPrice={thisPrice}
        thisAvgRating={thisAvgRating}
      />
    </button>
  );
}

export default SingleProd;
