import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import axios from 'axios';
import AnswerEntry from './AnswerEntry.jsx';

export default function QuestionEntry({ question }) {
  const [allAnswers, setAllAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [moreAnswers, setMoreAnswers] = useState(false);

  useEffect(() => {
    axios.get(`/api/qa/questions/${question.question_id}/answers?page=1&count=5`)
      .then(({ data: { results } }) => {
        setAllAnswers(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <div>
        <div>Q:{question.question_body} helpfulness: {question.question_helpfulness}</div>
        by{question.asker_name}, {format(parseISO(question.question_date), 'LLLL d, yyyy')}
      </div>
      {currentAnswers.map((answer) => (
        <AnswerEntry answer={answer} key={answer.answer_id} />
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
