import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { test, expect, afterEach } from '@jest/globals';
import {
  render, screen, cleanup,
} from '@testing-library/react';
import QuestionsAnswers from '../../client/src/components/QuestionsAnswers';

afterEach(cleanup);

test('should render QuestionsAnswers component', async () => {
  await render(<QuestionsAnswers />);
  const qnaElement = screen.getByRole('heading');
  expect(qnaElement).toBeInTheDocument();
  expect(qnaElement).toHaveTextContent('Questions & Answers');
});

test('should change the state of question list if the product id changes', async () => {
  // const id = 40352;
  // await render(<QuestionsAnswers productID={id} />);
});

// test('should match the snapshot', () => {
//   console.log(renderer.create(<QuestionsAnswers />).toJSON());
// });
