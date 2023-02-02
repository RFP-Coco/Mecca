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
          > More Answers...
          </button>
        )
        : allAnswers.length > 2
          ? (
            <button
              type="button"
              onClick={() => { setClicked(false); }}
            > Back
            </button>
          )
          : null }
    </div>
  );
}
