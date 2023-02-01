import React from 'react';
import { cleanup, render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, it, expect } from '@jest/globals';
import jest from 'jest';
import QuestionsAnswers from '../../client/src/components/QuestionsAnswers';

afterEach(cleanup);

describe('random test', () => {
  it('I dunno what Im doing', () => {
    expect(0).toBe(0);
  });
  // it('I dunno what Im doing', async () => {
  //   render(<QuestionsAnswers />);
  //   let app;
  //   await waitFor(() => { app = screen.getByText('Hello', { exact: false }); });
  //   console.log(app);
  //   expect(app).toBe(0);
  // });
});
