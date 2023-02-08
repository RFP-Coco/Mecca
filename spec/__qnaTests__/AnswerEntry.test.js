import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { test, expect, afterEach } from '@jest/globals';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import AnswerEntry from '../../client/src/components/Sub_Questions/AnswerEntry';

afterEach(cleanup);

test('should be able to render AnswerEntry component', () => {
  const answer = {
    answer_id: 5990571,
    answerer_name: 'hello',
    body: 'someone',
    date: '2023-02-07T00:00:00.000Z',
    helpfulness: 0,
    photos: [{
      id: 5342845,
      url: 'http://res.cloudinary.com/dfxarumgq/image/upload/v1675798210/msuv51q0dz2mnrb190kt.jpg',
    }],
  };
  render(<AnswerEntry answer={answer} />);
});
