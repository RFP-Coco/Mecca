import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  beforeEach, afterEach, describe, it, expect,
} from '@jest/globals';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import AddToCart from '../../client/src/components/Sub_ProductDetail/AddToCart';

require('dotenv').config();

describe('test add to cart', () => {
  let container;
  let product;
  let currentStyle;
  let windowOpenSpy;

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
    currentStyle = response.data.results[0];
    product = { name: 'Pumped Up Kicks' };

    const { container: renderedContainer } = render(<AddToCart
      product={product}
      skus={currentStyle.skus}
      startSelect
      currentStyle={currentStyle}
    />);
    container = renderedContainer;
    windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => {});
  });

  afterEach(() => {
    windowOpenSpy.mockRestore();
  });

  // it('Render the style selector', async () => {
  //   expect(container).toMatchSnapshot();
  // });

  it('Render the size and quantity selectors', async () => {
    const selectors = screen.getAllByRole('listbox');
    expect(selectors).toHaveLength(2);
    expect(selectors[0].getAttribute('name')).toBe('size');
    expect(selectors[1].getAttribute('name')).toBe('quantity');
  });

  it('Should not render the alert for size selector', async () => {
    const sizeAlert = screen.getByLabelText('select size alert');
    expect(sizeAlert.getAttribute('style')).toContain('visibility: hidden');
  });

  it('Should render corrent number of options for size selector', async () => {
    const selectors = screen.getAllByRole('listbox');
    const sizeSelect = selectors[0];
    expect(sizeSelect.childNodes).toHaveLength(Object.keys(currentStyle.skus).length + 1);
  });

  it('Should not submit cart when size is not selected', async () => {
    const addToBagButton = screen.getByText('ADD TO BAG');
    await userEvent.click(addToBagButton);
    const sizeAlert = screen.getByRole('button', { name: 'ADD TO BAG' });
    expect(sizeAlert.getAttribute('style')).toContain('visibility: visible');
  });

  it('should render social media share icons correctly', async () => {
    const twitterIcon = screen.getByLabelText('icon-twitter');
    const facebookIcon = screen.getByLabelText('icon-facebook');
    const pinterestIcon = screen.getByLabelText('icon-pinterest');
    expect(twitterIcon).not.toBe(null);
    expect(facebookIcon).not.toBe(null);
    expect(pinterestIcon).not.toBe(null);
  });

  it('should open the twitter share window on click', async () => {
    const twitterIcon = screen.getByLabelText('icon-twitter');
    await userEvent.click(twitterIcon);
    expect(windowOpenSpy).toHaveBeenCalledWith(
      `https://twitter.com/share?text=Check%20out%20this%20awesome%20${product.name}!&url=${window.location.href}`,
      '_blank',
      'location=no, width=500, height=300',
    );
  });

  it('should open the facebook share window on click', async () => {
    const facebookIcon = screen.getByLabelText('icon-facebook');
    await userEvent.click(facebookIcon);
    expect(windowOpenSpy).toHaveBeenCalledWith(
      `https://www.facebook.com/sharer.php?u=${window.location.href}`,
      '_blank',
      'location=no, width=500, height=300',
    );
  });

  it('should open the pinterest share window on click', async () => {
    const pinterestIcon = screen.getByLabelText('icon-pinterest');
    await userEvent.click(pinterestIcon);
    expect(windowOpenSpy).toHaveBeenCalledWith(
      `https://pinterest.com/pin/create/button/?&url=${window.location.href}&description=Check%20out%20this%20awesome%20${product.name}!`,
      '_blank',
      'location=no, width=500, height=300',
    );
  });
});
