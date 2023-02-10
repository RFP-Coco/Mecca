import React, { useState } from 'react';
import axios from 'axios';

export default function QuestionItem({ question, setShow, updateQuestions }) {
  const [voted, setVoted] = useState(false);

  const handleHelpful = () => {
    axios.put(`/api/qa/questions/${question.question_id}/helpful`)
      .then(updateQuestions)
      .catch((err) => {
        console.log(err);
      });
    setVoted(true);
  };

  return (
    <div className="question">
      <div className="question-container">
        <span className="question-item">Q: {question.question_body}</span>
        <span className="helpful">Helpful?</span>
        {voted
          ? (
            <span>Yes ({question.question_helpfulness})</span>
          )
          : (
            <button
              className="stringbutton"
              type="button"
              onClick={handleHelpful}
            >Yes ({question.question_helpfulness})
            </button>
          )}
        <button
          className="stringbutton"
          type="button"
          onClick={() => setShow(true)}
        > Add Answer
        </button>
      </div>
    </div>
  );
}
