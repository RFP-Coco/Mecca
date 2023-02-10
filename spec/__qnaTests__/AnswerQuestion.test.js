import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { test, expect, afterEach } from '@jest/globals';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import AnswerQuestion from '../../client/src/components/Sub_Questions/AnswerQuestion';

afterEach(cleanup);

test('should render answer questions component properly', () => {
  const question = {
    asker_name: 'josh',
    question_body: 'josh was here',
    question_date: '2022-10-29T00:00:00.000Z',
    question_helpfulness: 0,
    question_id: 644030,
    reported: false,
  };
  render(<AnswerQuestion question={question} productName="Summer Shoes" />);
});

test('should be able to change state with on change of input value', async () => {
  const question = {
    asker_name: 'josh',
    question_body: 'josh was here',
    question_date: '2022-10-29T00:00:00.000Z',
    question_helpfulness: 0,
    question_id: 644030,
    reported: false,
  };
  render(<AnswerQuestion question={question} productName="Summer Shoes" />);
  const nameInput = screen.getByPlaceholderText('Example: jackson11!');
  await fireEvent.change(nameInput, { target: { value: 'abcd' } });
  const emailInput = screen.getByPlaceholderText('Example: jackson11@random.email');
  await fireEvent.change(emailInput, { target: { value: 'abcd' } });
  const answerInput = screen.getByPlaceholderText('your answer');
  await fireEvent.change(answerInput, { target: { value: 'abcd' } });
});
