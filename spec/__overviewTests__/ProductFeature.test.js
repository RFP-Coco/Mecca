import React from 'react';
import { cleanup, render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import ProductFeature from '../../client/src/components/Sub_ProductDetail/ProductFeature';

afterEach(cleanup);
describe('Test product basic information', () => {
  let product;
  beforeEach(async () => {
    product = {
      features: [
        {
          feature: 'Sole',
          value: 'Rubber',
        },
        {
          feature: 'Material',
          value: 'FullControlSkin',
        },
        {
          feature: 'Stitching',
          value: 'Double Stitch',
        },
      ],
    };

    render(<ProductFeature product={product} />);
  });

  it('Render product features', () => {
    const productfeatures = screen.getByRole('group');
    expect(productfeatures.childNodes.length).toBe(product.features.length);
  });
});
