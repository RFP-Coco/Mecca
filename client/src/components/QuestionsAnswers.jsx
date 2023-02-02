import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sub_Questions/styles/questions.css';
import QuestionsSearch from './Sub_Questions/QuestionSearch.jsx';
import QuestionList from './Sub_Questions/QuestionList.jsx';
import AskQuestion from './Sub_Questions/AskQuestion.jsx';

export default function QuestionsAnswers({ productID, productName }) {
  const [questionList, setQuestionList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [show, setShow] = useState(false);

  const updateQuestions = () => {
    axios.get(`/api/qa/questions?product_id=${productID}`)
      .then((result) => {
        setQuestionList(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    updateQuestions();
  }, [productID]);

  useEffect(() => {
    setFilteredList(questionList);
  }, [questionList]);

  return (
    <div className="qna">
      <h3>Questions & Answers</h3>
      <QuestionsSearch
        questionList={questionList}
        setFilteredList={setFilteredList}
      />
      <QuestionList
        questionList={filteredList}
        updateQuestions={updateQuestions}
        productName={productName}
      />
      <button
        type="button"
        onClick={() => { setShow(true); }}
      > Ask a question
      </button>
      {show && (
        <AskQuestion
          productName={productName}
          setShow={setShow}
          productID={productID}
          update={updateQuestions}
        />
      )}
    </div>
  );
}
