import React from 'react';
import { cleanup, render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, it, expect } from '@jest/globals';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import ImageGallery from '../../client/src/components/Sub_ProductDetail/ImageGallery';
require('dotenv').config();

afterEach(cleanup);

describe('test thumbnail images', () => {
  it('Render 7 thumbnail images in the list if # thumbnail images > 7', async () => {
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
    const style = response.data.results[0];
    render(<ImageGallery currentStyle={style} />);
    expect(await screen.getAllByRole('img', { name: 'thumbnail' }).length).toBeLessThan(8);
  });
});
