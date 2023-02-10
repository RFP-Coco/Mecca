import React from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { test, expect, afterEach } from '@jest/globals';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import AskQuestion from '../../client/src/components/Sub_Questions/AskQuestion';

afterEach(cleanup);

test('should properly render ask question component', () => {
  render(<AskQuestion />);
});
