import React from 'react';

import {
  cleanup, test, render, screen, fireEevent,
} from '@testing-library/react';

import {
  afterEach, describe, it, expect,
} from '@jest/globals';

import userEvent from '@testing-library/user-event';
import jest from 'jest';

import RelProdContainer from '../../client/src/components/Sub_RelatedItems/RelProdContainer.jsx';

afterEach(cleanup);

describe('Related Items', () => {
  it('renders all related product cards to the DOM', () => {
    const productID = 40348;
    const { container } = (<RelProdContainer productID={productID} />);
    console.log('container: ', container);
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
