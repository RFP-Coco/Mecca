import React from 'react';
import QuestionsSearch from './Sub_Questions/QuestionSearch.jsx';
import QuestionList from './Sub_Questions/QuestionList.jsx';
import AskQuestion from './Sub_Questions/AskQuestion.jsx';
import AnswerQuestion from './Sub_Questions/AnswerQuestion.jsx';

export default function QuestionsAnswers() {
  return (
    <div>
      Hello from QnA
      <QuestionsSearch />
      <QuestionList />
      <AskQuestion />
      <AnswerQuestion />
    </div>
  );
}
