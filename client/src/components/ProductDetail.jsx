import React, { useState, useEffect } from 'react';
import './Sub_ProductDetail/styles/overview.css';
import ImageGallery from './Sub_ProductDetail/ImageGallery.jsx';
import ProductInfo from './Sub_ProductDetail/ProductInfo.jsx';
import StyleSelector from './Sub_ProductDetail/StyleSelector.jsx';

function ProductDetail({ product, productStyle }) {
  const [currentStyle, setCurrentStyle] = useState();
  // console.log('SHOW PRODUCT STYLE: ', productStyle);

  useEffect(() => {
    const styles = productStyle.results;
    const defaultStyle = styles.filter((style) => style['default?']);
    if (defaultStyle.length) {
      setCurrentStyle(defaultStyle[0]);
    } else {
      setCurrentStyle(styles[0]);
    }
  }, [product]);
  if (!currentStyle) {
    return null;
  }

  return (
    <div className="product-detail">
      <ImageGallery currentStyle={currentStyle} />
      <div className="product-text">
        <ProductInfo product={product} />
        <StyleSelector currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
      </div>

    </div>
  );
}
export default ProductDetail;
