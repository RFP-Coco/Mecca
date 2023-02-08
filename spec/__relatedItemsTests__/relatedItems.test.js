import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import axios from 'axios';

import RelProdContainer from '../../client/src/components/Sub_RelatedItems/RelProdContainer';

require('dotenv').config();

afterEach(cleanup);

axios.defaults.baseURL = 'http://localhost:3000';

const mockData = {
  shoes40349: {
    productInfo: {
      id: 40349,
      campus: 'hr-rfp',
      name: 'Pumped Up Kicks',
      slogan: 'Faster than a just about anything',
      description: 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
      category: 'Kicks',
      default_price: '89.00',
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
          feature: 'Mid-Sole',
          value: 'ControlSupport Arch Bridge',
        },
        {
          feature: 'Stitching',
          value: 'Double Stitch',
        },
      ],
    },
    productReviewMeta: {
      product_id: '40349',
      ratings: {
        1: '1',
        2: '2',
        3: '3',
        4: '2',
        5: '3',
      },
      recommended: {
        false: '2',
        true: '9',
      },
      characteristics: {
        Size: {
          id: 135236,
          value: '2.0833333333333333',
        },
        Width: {
          id: 135237,
          value: '1.8333333333333333',
        },
        Comfort: {
          id: 135238,
          value: '2.2500000000000000',
        },
        Quality: {
          id: 135239,
          value: '2.6153846153846154',
        },
      },
    },
    relatedIDs: [
      40349,
      40345,
      40348,
      40346,
      40345,
    ],
  },
};

describe('Related Products Container', () => {
  const user = userEvent.setup();

  it('LEFT carousel button displays & hides correctly', () => {
    render(<RelProdContainer
      parentProductID={40349}
      parentProduct={mockData.shoes40349.productInfo}
      parentReviewMetadata={mockData.shoes40349.productReviewMeta}
    />);
    return waitFor(() => (
      expect(screen.queryByTestId('null')).not.toBeInTheDocument()))
      .then(() => {
        expect(screen.getByTestId('scroll-left').toBeFalsy());
        return user.click(screen.getByTestId('scroll-right'));
      })
      .then(() => {
        expect(screen.getByTestId('scroll-left').toBeTruthy());
      });
  });
});

// describe.only('A very basic test born of exponential  frustration', () => {
//   it('understands truthy and falsy values', () => {
//     expect(0).toBeFalsy();
//     expect(undefined).toBeFalsy();
//     expect('a tapdancing hippopotamus').toBeTruthy();
//   });
//   it('understands length', () => {
//     expect('length').toHaveLength(6);
//     expect(['l', 'e', 'n', 'g', 't', 'h']).toHaveLength(6);
//     expect([0]).not.toHaveLength(0);
//   });
// });
