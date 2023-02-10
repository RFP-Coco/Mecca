import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { test, expect, afterEach } from '@jest/globals';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import AnswerButtons from '../../client/src/components/Sub_Questions/AnswerButtons';

afterEach(cleanup);

test('should render the button to display more answers', () => {
  render(<AnswerButtons moreAnswers={false} />);
  const btnElement = screen.getByRole('button', { name: 'See more answers' });
  expect(btnElement).toBeInTheDocument();
});

test('should render the collapse button w/ more than 2 answers and more answer button is clicked', () => {
  const answers = Array(3);
  render(<AnswerButtons moreAnswers allAnswers={answers} />);
  const btnElement = screen.getByRole('button', { name: 'Collapse answers' });
  expect(btnElement).toBeInTheDocument();
});

test('should not reneder any buttons if there are less than 3 answers', () => {
  render(<AnswerButtons moreAnswers allAnswers={Array(2)} />);
  const btnElement = screen.queryByRole('button');
  expect(btnElement).toBeNull();
});

test('clicking see more answers will change the state of clicked to true', () => {
  let clicked = false;
  const setClicked = (bool) => {
    clicked = bool;
  };
  render(<AnswerButtons moreAnswers={false} setClicked={setClicked} />);
  const btnElement = screen.getByRole('button', { name: 'See more answers' });
  expect(clicked).toBe(false);
  fireEvent.click(btnElement);
  expect(clicked).toBe(true);
});

test('clicking collapse answers should set clicked to true', () => {
  let clicked = true;
  const setClicked = (bool) => {
    clicked = bool;
  };
  const answers = Array(4);
  render(<AnswerButtons moreAnswers allAnswers={answers} setClicked={setClicked} />);
  const btnElement = screen.getByRole('button', { name: 'Collapse answers' });
  expect(clicked).toBe(true);
  fireEvent.click(btnElement);
  expect(clicked).toBe(false);
});
