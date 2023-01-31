import React from 'react';

export default function AnswerEntry({ answer }) {
  return (
    <div>
      A: {answer.body}
    </div>
  );
}
