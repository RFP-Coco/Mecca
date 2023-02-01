import React from 'react';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, it, expect } from '@jest/globals';
import jest from 'jest';

import RelProdContainer from '../../client/src/components/Sub_RelatedItems/RelProdContainer';

describe('A very basic test born of exponential  frustration', () => {
  it('understands truthy and falsy values', () => {
    expect(0).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect('a tapdancing hippopotamus').toBeTruthy();
  });
  it('understands length', () => {
    expect('length').toHaveLength(6);
    expect(['l', 'e', 'n', 'g', 't', 'h']).toHaveLength(6);
    expect([0]).not.toHaveLength(0);
  });
});
