import React from 'react';
import {
  cleanup, render, screen, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  afterEach, describe, it, expect,
} from '@jest/globals';
import jest from 'jest';
import ReviewList from '../../client/src/components/Sub_RatingsReviews/ReviewList';

afterEach(cleanup);

describe('More Reviews', () => {
  it('renders a "More Reviews" button if # reviews > 2', () => {
    const reviews = {
      product: '40345',
      page: 0,
      count: 5,
      results: [
        {
          review_id: 1135753,
          rating: 3,
          summary: 'this is monks test',
          recommend: true,
          response: null,
          body: 'it fits me perfectly',
          date: '2022-02-20T00:00:00.000Z',
          reviewer_name: 'monks',
          helpfulness: 1,
          photos: [],
        },
        {
          review_id: 1277605,
          rating: 4,
          summary: 'meow',
          recommend: false,
          response: null,
          body: 'hello',
          date: '2022-12-03T00:00:00.000Z',
          reviewer_name: 'mo',
          helpfulness: 0,
          photos: [],
        },
        {
          review_id: 1277604,
          rating: 4,
          summary: 'meow',
          recommend: false,
          response: null,
          body: 'hello',
          date: '2022-12-03T00:00:00.000Z',
          reviewer_name: 'mo',
          helpfulness: 0,
          photos: [],
        },
        {
          review_id: 1277603,
          rating: 4,
          summary: 'meow',
          recommend: false,
          response: null,
          body: 'hello',
          date: '2022-12-03T00:00:00.000Z',
          reviewer_name: 'mo',
          helpfulness: 0,
          photos: [],
        },
        {
          review_id: 1115518,
          rating: 5,
          summary: '',
          recommend: true,
          response: null,
          body: 'Van',
          date: '2022-01-02T00:00:00.000Z',
          reviewer_name: 'Van',
          helpfulness: 0,
          photos: [],
        },
      ],
    };
    const { container } = render(<ReviewList reviews={reviews} />);
    expect(container).toMatchSnapshot();
  });

  it('if product has <2 reviews, button does not appear', () => {
    const reviews = {
      product: '40345',
      page: 0,
      count: 5,
      results: [
        {
          review_id: 1135753,
          rating: 3,
          summary: 'this is monks test',
          recommend: true,
          response: null,
          body: 'it fits me perfectly',
          date: '2022-02-20T00:00:00.000Z',
          reviewer_name: 'monks',
          helpfulness: 1,
          photos: [],
        },
        {
          review_id: 1277605,
          rating: 4,
          summary: 'meow',
          recommend: false,
          response: null,
          body: 'hello',
          date: '2022-12-03T00:00:00.000Z',
          reviewer_name: 'mo',
          helpfulness: 0,
          photos: [],
        },
      ],
    };
    const { container } = render(<ReviewList reviews={reviews} />);
    expect(container).toMatchSnapshot();
  });

  it('button click should render 2 additional tests in the correct order', () => {
    const reviews = {
      product: '40345',
      page: 0,
      count: 5,
      results: [
        {
          review_id: 1135753,
          rating: 3,
          summary: 'this is monks test',
          recommend: true,
          response: null,
          body: 'it fits me perfectly',
          date: '2022-02-20T00:00:00.000Z',
          reviewer_name: 'monks',
          helpfulness: 1,
          photos: [],
        },
        {
          review_id: 1277605,
          rating: 4,
          summary: 'meow',
          recommend: false,
          response: null,
          body: 'hello',
          date: '2022-12-03T00:00:00.000Z',
          reviewer_name: 'mo',
          helpfulness: 0,
          photos: [],
        },
        {
          review_id: 1277604,
          rating: 4,
          summary: 'meow',
          recommend: false,
          response: null,
          body: 'hello',
          date: '2022-12-03T00:00:00.000Z',
          reviewer_name: 'mo',
          helpfulness: 0,
          photos: [],
        },
        {
          review_id: 1277603,
          rating: 4,
          summary: 'meow',
          recommend: false,
          response: null,
          body: 'hello',
          date: '2022-12-03T00:00:00.000Z',
          reviewer_name: 'mo',
          helpfulness: 0,
          photos: [],
        },
      ],
    };

    const user = userEvent.setup();
    render(<ReviewList reviews={reviews} />);
    const button = screen.getByRole('button', { name: 'More Reviews' });
    // const handleButtonClick = jest.fn();

    user.click(button);
    const list = screen.getByRole('list');

    const { getAllByRole } = within(list);

    const items = getAllByRole('listitem');

    expect(items.length).toBe(4); // ...

  });

  it('renders response from seller if it exists', () => {
    const reviews = {
      product: '40345',
      page: 0,
      count: 5,
      results: [
        {
          review_id: 1135753,
          rating: 3,
          summary: 'this is monks test',
          recommend: true,
          response: 'stoopid',
          body: 'it fits me perfectly',
          date: '2022-02-20T00:00:00.000Z',
          reviewer_name: 'monks',
          helpfulness: 1,
          photos: [],
        },
        {
          review_id: 1277605,
          rating: 4,
          summary: 'meow',
          recommend: false,
          response: null,
          body: 'hello',
          date: '2022-12-03T00:00:00.000Z',
          reviewer_name: 'mo',
          helpfulness: 0,
          photos: [],
        },
      ],
    };
    const { container } = render(<ReviewList reviews={reviews} />);
    expect(container).toMatchSnapshot();
  });
});
