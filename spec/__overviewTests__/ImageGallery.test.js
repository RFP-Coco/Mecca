import React from 'react';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, it, expect } from '@jest/globals';
import jest from 'jest';
import ImageGallery from '../../client/src/components/Sub_ProductDetail/ImageGallery';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
  it('knows that 3 and 2 make 5', () => {
    expect(3 + 2).toBe(4);
  });
  
});
