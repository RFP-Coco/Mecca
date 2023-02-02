import React, { useState } from 'react';
import axios from 'axios';
import { parseISO, format } from 'date-fns';

export default function AnswerEntry({ answer, updateAnswers }) {
  const [reported, setReported] = useState(false);

  const handleHelpful = () => {
    axios.put(`/api/qa/answers/${answer.answer_id}/helpful`)
      .then(updateAnswers)
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReport = () => {
    axios.put(`/api/qa/answers/${answer.answer_id}/report`)
      .then()
      .catch((err) => {
        console.log(err);
      });
    setReported(true);
  };
  return (
    <div>
      <div>
        <span className="answer-item">A:</span> {answer.body}
      </div>
      <div className="answer-info">
        by {answer.answerer_name}  {format(parseISO(answer.date), 'LLLL d, yyyy')}   |  Helpful?
        <button
          type="button"
          onClick={handleHelpful}
        >
          Yes({answer.helpfulness})
        </button>
        {reported
          ? (
            <>
              Reported
            </>
          )
          : (
            <button
              type="button"
              onClick={handleReport}
            >
              Report
            </button>
          )}
      </div>
    </div>
  );
}
