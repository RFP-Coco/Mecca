import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerEntry from './AnswerEntry.jsx';
import AnswerButtons from './AnswerButtons.jsx';
import AnswerQuestion from './AnswerQuestion.jsx';
import QuestionItem from './QuestionItem.jsx';

export default function QuestionEntry({
  question, updateQuestions, productName, index,
}) {
  const [allAnswers, setAllAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [moreAnswers, setMoreAnswers] = useState(false);
  const [show, setShow] = useState(false);

  const updateAnswers = () => {
    axios.get(`/api/qa/questions/${question.question_id}/answers`)
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
    <div className={`element-container entry${index + 1}`}>
      <QuestionItem
        updateQuestions={updateQuestions}
        question={question}
        setShow={setShow}
      />
      {show && (
        <AnswerQuestion
          productName={productName}
          question={question}
          setShow={setShow}
          fetchAnswers={updateAnswers}
        />
      )}
      <div className="answer-list">
        {currentAnswers.map((answer) => (
          <AnswerEntry
            answer={answer}
            key={answer.answer_id}
            updateAnswers={updateAnswers}
          />
        ))}
      </div>
      <AnswerButtons moreAnswers={moreAnswers} setClicked={setClicked} allAnswers={allAnswers} />
    </div>
  );
}
