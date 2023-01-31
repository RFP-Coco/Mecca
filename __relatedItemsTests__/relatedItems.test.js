import React from 'react';
import { cleanup, test, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, it, expect } from '@jest/globals';
import jest from 'jest';

// import RelatedItems from '../client/src/components/RelatedItems';
import RelProdContainer from '../client/src/components/Sub_RelatedItems/RelProdContainer';

afterEach(cleanup);

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
