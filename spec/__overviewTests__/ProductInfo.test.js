import React from 'react';
import { cleanup, render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import ProductInfo from '../../client/src/components/Sub_ProductDetail/ProductInfo';

afterEach(cleanup);
describe('Test product basic information', () => {
  let product;
  let reviewMetadata
  beforeEach(async () => {
    product = {
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

    reviewMetadata = {
      product_id: '40351',
      ratings: {
        1: '16',
        2: '8',
        3: '32',
        4: '9',
        5: '69',
      },
      recommended: {
        false: '31',
        true: '103',
      },
      characteristics: {
        Size: {
          id: 135244,
          value: '3.1529411764705882',
        },
        Width: {
          id: 135245,
          value: '3.1084337349397590',
        },
        Comfort: {
          id: 135246,
          value: '3.9878048780487805',
        },
        Quality: {
          id: 135247,
          value: '4.1341463414634146',
        },
      },
    };
    render(<ProductInfo product={product} reviewMetadata={reviewMetadata} reviewRef={''} />);
  });

  it('Render product name', () => {
    // expect(screen.getByRole('heading').textContent).toMatch(/YEasy 350/i);
    const productName = screen.getByRole('heading', { name: product.name });
    expect(productName).not.toBeNull();
  });

  it('Render product category', () => {
    const productCategory = screen.getByLabelText('product cateogy');
    // console.log(productCategory.textContent);
    expect(productCategory.textContent.toLowerCase()).toMatch(product.category.toLowerCase());
  });

  it('Render product rating stars', () => {
    const productRatingStars = screen.getByLabelText('product rating stars');
    expect(productRatingStars.childNodes).toHaveLength(5);
  });

  it('Render number of reviews', () => {
    const totalVotes = Object.entries(reviewMetadata.ratings).reduce((
      (a, b) => a + Number(b[1])), 0);
    const countsOfRating = screen.getByLabelText('link to review section');
    expect(countsOfRating.textContent).toMatch(totalVotes.toString());
  });
});
