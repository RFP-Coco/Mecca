import React from 'react';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, it, expect } from '@jest/globals';
import jest from 'jest';
import ProductInfo from '../../client/src/components/Sub_ProductDetail/ProductInfo';

afterEach(cleanup);
describe('Render product name', () => {
  it('Render product name', () => {
    const product = {
      id: 40351,
      campus: 'hr-rfp',
      name: 'YEasy 350',
      slogan: 'Just jumped over jumpman',
      description: 'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
      category: 'Kicks',
      default_price: '450.00',
      created_at: '2021-08-13T14:38:44.509Z',
      updated_at: '2021-08-13T14:38:44.509Z',
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
    const { getByRole } = render(<ProductInfo product={product} />);
    expect(getByRole('heading').textContent).toMatch(/YEasy 350/i);
  });
});
