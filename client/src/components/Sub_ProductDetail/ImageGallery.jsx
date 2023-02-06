import React, { useState, useEffect } from 'react';
import ModalView from './Sub_ImageGallery/ModalView.jsx';

function ImageGallery({ currentStyle, productID }) {
  // console.log('SHOW CURRENT STYLE: ', currentStyle);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [styleMemo, setStyleMemo] = useState({});
  /**
    * @param {('default' | "expand" | zoom')} initialState
  */
  const [modalView, setModalView] = useState('default');

  const { style_id } = currentStyle;

  useEffect(() => {
    setCurrentImageIndex(0);
    setStyleMemo({});
  }, [productID]);

  useEffect(() => {
    setStyleMemo({ ...styleMemo, [style_id]: currentImageIndex });
  }, [currentImageIndex]);

  useEffect(() => {
    if (styleMemo[style_id]) {
      setCurrentImageIndex(styleMemo[style_id]);
    } else {
      setCurrentImageIndex(0);
    }
  }, [currentStyle]);

  useEffect(() => {
    if (modalView !== 'default') document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [modalView]);

  return (
    // <div className={`image-gallery ${showExpandView ? 'expand-view' : ''}`}>
    <div className="image-gallery">
      {modalView === 'expand'
    && (
    <ModalView
      modalClass="expand-view"
      currentStyle={currentStyle}
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      modalView={modalView}
      setModalView={setModalView}
    />
    )}

      {modalView === 'zoom'
    && (
    <ModalView
      modalClass="zoom-view"
      currentStyle={currentStyle}
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      modalView={modalView}
      setModalView={setModalView}
    />
    )}

      <ModalView
        modalClass="default-view"
        currentStyle={currentStyle}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        modalView={modalView}
        setModalView={setModalView}
      />

    </div>
  );
}
export default ImageGallery;
