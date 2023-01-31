import React from 'react';

import {
  cleanup, test, render, screen, fireEevent,
} from '@testing-library/react';

import {
  afterEach, describe, it, expect,
} from '@jest/globals';

import userEvent from '@testing-library/user-event';
import jest from 'jest';

import RelProdContainer from '../client/src/components/Sub_RelatedItems/RelProdContainer.jsx';

afterEach(cleanup);

describe('Related Items', () => {
  it('renders all related product cards to the DOM', () => {
    const relatedProds = [
      {
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
      {
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
      },
      {
        id: 40352,
        campus: 'hr-rfp',
        name: 'Summer Shoes',
        slogan: 'A risky call in the spring or fall',
        description: 'Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.',
        category: 'Kicks',
        default_price: '59.00',
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
      {
        id: 40344,
        campus: 'hr-rfp',
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        category: 'Jackets',
        default_price: '140.00',
        created_at: '2021-08-13T14:38:44.509Z',
        updated_at: '2021-08-13T14:38:44.509Z',
        features: [
          {
            feature: 'Fabric',
            value: 'Canvas',
          },
          {
            feature: 'Buttons',
            value: 'Brass',
          },
        ],
      },
      {
        id: 40346,
        campus: 'hr-rfp',
        name: 'Morning Joggers',
        slogan: 'Make yourself a morning person',
        description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
        category: 'Pants',
        default_price: '40.00',
        created_at: '2021-08-13T14:38:44.509Z',
        updated_at: '2021-08-13T14:38:44.509Z',
        features: [
          {
            feature: 'Fabric',
            value: '100% Cotton',
          },
          {
            feature: 'Cut',
            value: 'Skinny',
          },
        ],
      },
    ];
    const { container } = (<RelProdContainer relatedProds={relatedProds} />);
    expect(container).toMatchSnapshot();
  });
});

// RelProdContainer.jsx

// getRelatedProdsAndReviews should return a response data
//   array length 7 when productID state is 40348

// describe('Related Products Container', () => {
//   test('response data is an array of length 7 when productID is 40348', () => {
//     const id = 40348;
//     return getRelatedProdsAndReviews()
//       .then((response) => {
//         expect(response.data).toHaveLength(7);
//       });
//     // const {container} = render(<RelProdContainer productID={40348})
//   });
// });

// the relatedIDs state should not have duplicate IDs
//   the relatedIDs state should be length 6 when productID state is 40348

// the relatedProds state should be an array of same length as relatedIDs state

// there should be the same # of 'SingleProd' components rendered as relatedProds' length
