import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import axios from 'axios';
import AnswerEntry from './AnswerEntry.jsx';

export default function QuestionEntry({ question }) {
  const [allAnswers, setAllAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [moreAnswers, setMoreAnswers] = useState(false);

  const updateAnswers = () => {
    axios.get(`/api/qa/questions/${question.question_id}/answers?page=1&count=5`)
      .then(({ data: { results } }) => {
        setAllAnswers(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    updateAnswers();
  }, [question]);

  useEffect(() => {
    if (!clicked) {
      setCurrentAnswers(allAnswers.slice(0, 2));
    } else {
      setCurrentAnswers(allAnswers);
    }
  }, [allAnswers, clicked]);

  useEffect(() => {
    setMoreAnswers(allAnswers.length <= currentAnswers.length);
  }, [currentAnswers]);

  return (
    <div>
      <div className="question">
        <div>
          <span className="question-item">Q: {question.question_body}</span>
          <span>Helpful?</span> <button type="button">Yes</button>{question.question_helpfulness}
          <button type="button"> Add Answer</button>
        </div>
      </div>
      {currentAnswers.map((answer) => (
        <AnswerEntry
          answer={answer}
          key={answer.answer_id}
          updateAnswers={updateAnswers}
        />
      ))}
      {!moreAnswers
        ? (
          <button
            type="button"
            onClick={() => { setClicked(true); }}
          > More Answers...
          </button>
        )
        : (
          <button
            type="button"
            onClick={() => { setClicked(false); }}
          > Back
          </button>
        )}
    </div>
  );
}
