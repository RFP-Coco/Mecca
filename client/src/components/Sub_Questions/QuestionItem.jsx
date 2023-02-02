import React from 'react';
import axios from 'axios';

export default function QuestionItem({ question, setShow, updateQuestions }) {
  const handleHelpful = () => {
    axios.put(`/api/qa/questions/${question.question_id}/helpful`)
      .then(updateQuestions)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="question">
      <div>
        <span className="question-item">Q: {question.question_body}</span>
        <span>Helpful?</span> <button type="button" onClick={handleHelpful}>Yes({question.question_helpfulness})</button>
        <button type="button" onClick={() => setShow(true)}> Add Answer</button>
      </div>
    </div>
  );
}
