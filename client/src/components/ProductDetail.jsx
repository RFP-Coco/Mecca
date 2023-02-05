import React, { useState, useEffect } from 'react';
import './Sub_ProductDetail/styles/overview.css';
import ImageGallery from './Sub_ProductDetail/ImageGallery.jsx';
import ProductInfo from './Sub_ProductDetail/ProductInfo.jsx';
import StyleSelector from './Sub_ProductDetail/StyleSelector.jsx';
import AddToCart from './Sub_ProductDetail/AddToCart.jsx';

function ProductDetail({
  product, productStyle, productID,
  currentStyle, setCurrentStyle, reviewMetadata, reviewRef,
}) {
  // const [currentStyle, setCurrentStyle] = useState();
  const [startSelect, setStartSelect] = useState(false);

  useEffect(() => {
    setStartSelect(false);
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
      <ImageGallery
        currentStyle={currentStyle}
        productID={productID}
      />
      <div className="product-text">
        <ProductInfo
          product={product}
          reviewMetadata={reviewMetadata}
          reviewRef={reviewRef}
        />
        <StyleSelector
          productStyle={productStyle}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          productID={productID}
          startSelect={startSelect}
          setStartSelect={setStartSelect}
        />
        <AddToCart
          skus={currentStyle.skus}
          startSelect={startSelect}
          currentStyle={currentStyle}
        />
      </div>

    </div>
  );
}
export default ProductDetail;
