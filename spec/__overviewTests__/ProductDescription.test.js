import React from 'react';
import { cleanup, render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import ProductDesciption from '../../client/src/components/Sub_ProductDetail/ProductDesciption';

afterEach(cleanup);
describe('Test product basic information', () => {
  let product;
  beforeEach(async () => {
    product = {
      slogan: 'Just jumped over jumpman',
      description: 'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
    };

    render(<ProductDesciption product={product} />);
  });

  it('Render product slogan', () => {
    const productSlogan = screen.getByLabelText('product slogan');
    // console.log(productCategory.textContent);
    expect(productSlogan.textContent.toLowerCase()).toMatch(product.slogan.toLowerCase());
  });

  it('Render product description', () => {
    const productDesciption = screen.getByLabelText('product description');
    // console.log(productCategory.textContent);
    expect(productDesciption.textContent.toLowerCase()).toMatch(product.description.toLowerCase());
  });

});
