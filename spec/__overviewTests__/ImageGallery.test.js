import React from 'react';
import { cleanup, render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import ImageGallery from '../../client/src/components/Sub_ProductDetail/ImageGallery';

require('dotenv').config();

afterEach(cleanup);

describe('test image gallery', () => {
  // make the axios call and render the component before the tests
  let style;
  beforeEach(async () => {
    const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
    const productID = 40351;
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
    style = response.data.results[0];
    render(<ImageGallery currentStyle={style} productID={productID} />);
  });

  it('Render the default view', async () => {
    const modalView = screen.getByTestId('modalView');
    expect(modalView.classList.contains('default-view')).toBe(true);
  });

  it('Render up to 7 thumbnail images in the list if # thumbnail images > 7', async () => {
    const thumbnails = screen.getAllByRole('img', { name: 'thumbnail' });
    expect(thumbnails.length).toBeLessThan(8);
  });

  it('If the first image is selected, the backward arrow for previous image should not appear. ', async () => {
    const prevArrowIcon = screen.getByLabelText('previous image');
    // the backward icon is present but invisible
    expect(prevArrowIcon.getAttribute('style')).toContain('visibility: hidden');
  });

  it('If click the forward arrow besides the main image, the next image should appear', async () => {
    const nextArrowIcon = screen.getByLabelText('next image');
    // the forward icon is visible
    expect(nextArrowIcon.getAttribute('style')).toContain('visibility: visible');
    await userEvent.click(nextArrowIcon);
    // after click, the backward icon is visible
    const prevArrowIcon = screen.getByLabelText('previous image');
    expect(prevArrowIcon.getAttribute('style')).toContain('visibility: visible');
    // the current image will be the second image for the current style
    const mainImage = screen.getByRole('img', { name: 'main product' });
    expect(mainImage.getAttribute('src')).toBe(style.photos[1].url);
  });

  it('If click the forward arrow in the thumbnails section, the next thumbnail should appear', async () => {
    const nextArrowIcon = screen.getByLabelText('next thumbnail');
    // the forward icon is visible
    expect(nextArrowIcon.getAttribute('style')).toContain('visibility: visible');
    await userEvent.click(nextArrowIcon);
    // after click, the backward icon is visible
    const prevArrowIcon = screen.getByLabelText('previous thumbnail');
    expect(prevArrowIcon.getAttribute('style')).toContain('visibility: visible');
    // the current image will be the second image for the current style
    const mainImage = screen.getByRole('img', { name: 'main product' });
    expect(mainImage.getAttribute('src')).toBe(style.photos[1].url);
  });

  it('Render the expand view when user clicked on the main image', async () => {
    const mainImage = screen.getByRole('img', { name: 'main product' });
    await userEvent.click(mainImage);
    const modalView = screen.getAllByTestId('modalView');
    expect(modalView.length).toBe(2);
    expect(modalView[0].classList.contains('expand-view')).toBe(true);
  });

  it('Exit the expand view when user clicked on the close icon', async () => {
    const mainImage = screen.getByRole('img', { name: 'main product' });
    // click the main image to enter the expand view
    await userEvent.click(mainImage);
    const closeIcon = screen.getAllByLabelText('close expand view');
    // click the close icon to exit the expand view
    await userEvent.click(closeIcon[0]);
    const modalView = screen.getAllByTestId('modalView');
    expect(modalView.length).toBe(1);
    expect(modalView[0].classList.contains('expand-view')).toBe(false);
  });

  it('Render the zoom view when user clicked on the main image in the expand view', async () => {
    const mainImage = screen.getByRole('img', { name: 'main product' });
    await userEvent.click(mainImage);
    const mainImages = screen.getAllByRole('img', { name: 'main product' });
    await userEvent.click(mainImages[0]);
    const modalView = screen.getAllByTestId('modalView');
    expect(modalView.length).toBe(2);
    expect(modalView[0].classList.contains('zoom-view')).toBe(true);
  });
});
