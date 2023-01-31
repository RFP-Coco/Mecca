import React, { useState, useEffect } from 'react';
import './Sub_ProductDetail/styles/overview.css';
import ImageGallery from './Sub_ProductDetail/ImageGallery.jsx';
import ProductInfo from './Sub_ProductDetail/ProductInfo.jsx';

function ProductDetail({ product, productStyle }) {
  const [currentStyle, setCurrentStyle] = useState();
  // console.log('SHOW PRODUCT STYLE: ', productStyle);

  useEffect(() => {
    const styles = productStyle.results;
    const defaultStyle = styles.filter((style) => style['default?']);
    if (defaultStyle) {
      // console.log('SHOW DEFAULT STYLE: ', defaultStyle);
      setCurrentStyle(defaultStyle[0]);
    } else {
      setCurrentStyle(styles[0]);
    }
  }, []);

  return (
    <div className="product-detail">
      {currentStyle && <ImageGallery currentStyle={currentStyle} />}
      <div className="product-text">
        {currentStyle && <ProductInfo product={product} />}
      </div>

    </div>
  );
}
export default ProductDetail;
