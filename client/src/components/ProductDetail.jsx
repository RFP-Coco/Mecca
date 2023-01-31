import React, {useState, useEffect} from 'react';
import ImageGallery from './Sub_ProductDetail/ImageGallery.jsx';
const ProductDetail = ({productStyle}) => {
  const [currentStyle, setCurrentStyle] = useState();
  console.log('SHOW PRODUCT STYLE: ', productStyle)

  useEffect(() => {
    let styles = productStyle.results;
    let defaultStyle = styles.filter(style => style['default?']);
    if (defaultStyle) {
      console.log('SHOW DEFAULT STYLE: ', defaultStyle);
      setCurrentStyle(defaultStyle[0]);
    } else {
      setCurrentStyle(styles[0]);
    }
  }, []);

  return (
    <div className='product-detail'>
      {currentStyle && <ImageGallery currentStyle={currentStyle}/>}
      {currentStyle && <div>style selector</div>}

    </div>
  );
};
export default ProductDetail;
