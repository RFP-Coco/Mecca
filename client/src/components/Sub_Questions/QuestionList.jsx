import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

export default function QuestionList({ questionList, updateQuestions, productName }) {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentDisplay, setCurrentDisplay] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState(true);

  useEffect(() => {
    setAllQuestions(questionList);
  }, [questionList]);

  useEffect(() => {
    setCurrentDisplay(allQuestions.slice(0, 2));
    setMoreQuestions(allQuestions.length > 2);
  }, [allQuestions]);

  const handleClick = () => {
    setCurrentDisplay(allQuestions.slice(0, currentDisplay.length + 2));
    if (allQuestions.length <= currentDisplay.length + 2) {
      setMoreQuestions(false);
    }
  };

  if (!allQuestions.length) {
    return (
      <div>
        There are no questions
      </div>
    );
  }

  return (
    <div className="question-list">
      {currentDisplay.map((question) => (
        <QuestionEntry
          productName={productName}
          question={question}
          key={question.question_id}
          updateQuestions={updateQuestions}
        />
      ))}
      {moreQuestions && (
        <button
          className="stringbutton"
          type="button"
          onClick={handleClick}
        > More Answered Questions
        </button>
      )}
    </div>
  );
}
