/* eslint-disable no-nested-ternary */
import React from 'react';

export default function AnswerButtons({ moreAnswers, allAnswers, setClicked }) {
  return (
    <div>
      {!moreAnswers
        ? (
          <button
            type="button"
            onClick={() => { setClicked(true); }}
          > See more answers
          </button>
        )
        : allAnswers.length > 2
          ? (
            <button
              type="button"
              onClick={() => { setClicked(false); }}
            > Collapse answers
            </button>
          )
          : null }
    </div>
  );
}
