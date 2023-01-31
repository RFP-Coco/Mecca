import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

export default function QuestionList({ questionList }) {
  const [allQuestions, setAllAnswers] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [moreQuestions, setMoreQuestions] = useState(false);

  useEffect(() => {
    setAllAnswers(questionList);
  }, [questionList]);

  useEffect(() => {
    const { length } = currentQuestions;
    setCurrentQuestions(questionList.slice(0, length + 2));
  }, [clicked]);

  useEffect(() => {
    setMoreQuestions(allQuestions.length <= currentQuestions.length);
  }, [currentQuestions]);

  useEffect(() => {
    setCurrentQuestions(allQuestions.slice(0, 2));
  }, [allQuestions]);

  if (!allQuestions.length) {
    return (
      <div>
        There is no questions
      </div>
    );
  }

  return (
    <div>
      {currentQuestions.map((question) => (
        <QuestionEntry
          question={question}
          key={question.question_id}
        />
      ))}
      {!moreQuestions && (
        <button
          type="button"
          onClick={() => {
            setClicked(!clicked);
          }}
        > More Questions...
        </button>
      )}
    </div>
  );
}
