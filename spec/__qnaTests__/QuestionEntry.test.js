import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { test, expect, afterEach } from '@jest/globals';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import QuestionEntry from '../../client/src/components/Sub_Questions/QuestionEntry';

afterEach(cleanup);

test('should render question entry component prorperly', () => {
  const question = {
    answers: {},
    asker_name: 'josh',
    question_body: 'nobody',
    question_date: '2023-02-08T00:00:00.000Z',
    question_helpfulness: 1,
    question_id: 645056,
    reported: false,
  };
  render(<QuestionEntry question={question} photos={[]} setPhotos={() => {}} />);
});
