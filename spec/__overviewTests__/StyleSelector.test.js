import React from 'react';
import { cleanup, render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import StyleSelector from '../../client/src/components/Sub_ProductDetail/StyleSelector';

require('dotenv').config();

afterEach(cleanup);
describe('test style selector', () => {
  let container;
  let styles;
  let productStyle;
  let currentStyle;
  const startSelect = false;
  const setCurrentStyle = jest.fn();
  const setStartSelect = jest.fn();

  beforeEach(async () => {
    const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
    const productID = 40349;
    const url = `/products/${productID}/styles`;
    const options = {
      method: 'get',
      baseURL,
      url,
      headers: {
        Authorization: process.env.API_KEY,
      },
    };
    const response = await axios(options);
    productStyle = response.data;
    styles = productStyle.results;

    const defaultStyle = styles.filter((style) => style['default?']);
    currentStyle = defaultStyle[0];
    const { container: renderedContainer } = render(<StyleSelector
      productStyle={productStyle}
      currentStyle={currentStyle}
      setCurrentStyle={setCurrentStyle}
      startSelect={startSelect}
      setStartSelect={setStartSelect}
    />);
    container = renderedContainer;
  });

  // it('Render the style selector', async () => {
  //   expect(container).toMatchSnapshot();
  // });

  it('Render the correct number of styles', async () => {
    const styleContainer = screen.getByLabelText('select a style');
    expect(styleContainer.childNodes).toHaveLength(styles.length);
  });

  it('Set the background image URL correctly', async () => {
    const firstStyle = screen.getAllByLabelText('individual style')[0];
    // console.log(firstStyle.getAttribute('style'));
    expect(firstStyle.style.backgroundImage).toEqual(`url(${styles[0].photos[0].thumbnail_url})`);
  });

  it('Click the style thumbnail will call the function setCurrentStyle', async () => {
    const secondStyle = screen.getAllByLabelText('individual style')[1];
    await userEvent.click(secondStyle);
    expect(setCurrentStyle).toHaveBeenCalled();
  });
});
