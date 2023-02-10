import React, { useState } from 'react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import { test, expect, afterEach } from '@jest/globals';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import ImageModal from '../../client/src/components/Sub_Questions/ImageModal';

afterEach(cleanup);

test('should properly render image modal component', () => {
  const photos = [
    'http://res.cloudinary.com/dfxarumgq/image/upload/v1675824618/xtd68nrxvyajfgti0ila.jpg',
    'http://res.cloudinary.com/dfxarumgq/image/upload/v1675824671/acjct8xbd5r4quzhm76o.jpg',
  ];
  render(<ImageModal photos={photos} />);
});

test('should set display to false when submit is clicked', () => {
  const photos = [
    'http://res.cloudinary.com/dfxarumgq/image/upload/v1675824618/xtd68nrxvyajfgti0ila.jpg',
    'http://res.cloudinary.com/dfxarumgq/image/upload/v1675824671/acjct8xbd5r4quzhm76o.jpg',
  ];
  let display = true;
  const setDisplay = (bool) => {
    display = bool;
  };
  render(<ImageModal photos={photos} display={setDisplay} />);
  expect(display).toBeTruthy();
  const btnElement = screen.getByRole('button', { name: 'Submit' });
  fireEvent.click(btnElement);
  expect(display).toBeFalsy();
});

test('should reset photos and set display to false', () => {
  let photos = [
    'http://res.cloudinary.com/dfxarumgq/image/upload/v1675824618/xtd68nrxvyajfgti0ila.jpg',
    'http://res.cloudinary.com/dfxarumgq/image/upload/v1675824671/acjct8xbd5r4quzhm76o.jpg',
  ];
  let display = true;
  const setDisplay = (bool) => {
    display = bool;
  };
  const setPhotos = (array) => {
    photos = array;
  };
  render(<ImageModal photos={photos} display={setDisplay} setPhotos={setPhotos} />);
  expect(display).toBeTruthy();
  expect(photos).toHaveLength(2);
  const btnElement = screen.getByRole('button', { name: 'Cancel' });
  fireEvent.click(btnElement);
  expect(display).toBeFalsy();
  expect(photos).toEqual([]);
});

test('on change of input it should make api request', () => {
  let photos = [];
  const setPhotos = (array) => {
    photos = array;
  };
  render(<ImageModal photos={photos} setPhotos={setPhotos} />);
  // const input = 'something';
  // input files to apply change to onChange input.
  // fireEvent.change(something, something);
});
