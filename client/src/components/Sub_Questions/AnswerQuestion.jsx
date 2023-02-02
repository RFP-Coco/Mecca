import React, { useState } from 'react';
import axios from 'axios';

export default function AnswerQuestion({ question, setShow, updateAnswers }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const photos = [];

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleQuestionChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = () => {
    const config = {
      name,
      email,
      body,
      photos,
    };
    axios.post(`/api/qa/questions/${question.question_id}/answers`, config)
      .then(updateAnswers)
      .catch((err) => console.log(err));
    setShow(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Answer Question </h3>
        </div>
        <div className="modal-body">
          Question: {question.question_body}
          <br />
          YourName:
          <input placeholder="Your Name" onChange={handleNameChange} />
          Email:
          <input placeholder="email" onChange={handleEmailChange} />
          Answer:
          <input type="text" placeholder="your question" onChange={handleQuestionChange} />
        </div>
        <div className="modal-footer">
          <button type="button" onClick={handleSubmit}> answer </button>
          <button type="button" onClick={() => { setShow(false); }}> cancel</button>
        </div>
      </div>
    </div>
  );
}
