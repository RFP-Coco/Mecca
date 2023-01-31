import React from 'react';
import { parseISO, format } from 'date-fns';

export default function AnswerEntry({ answer }) {
  return (
    <div>
      <div>A: {answer.body} helpfulness:{answer.helpfulness}</div>
      by {answer.answerer_name}  {format(parseISO(answer.date), 'LLLL d, yyyy')}
    </div>
  );
}
