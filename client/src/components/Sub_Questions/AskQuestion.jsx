/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';

export default function AskQuestion({ setShow, productID, update, productName }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleQuestionChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = (e) => {
    if (name === '') {
      alert('you must fill out your name');
    } else if (email === '') {
      alert('you must fill out your name');
    } else if (body === '') {
      alert('you must fill out your question');
    } else {
      e.preventDefault();
      const config = {
        name,
        email,
        body,
        product_id: productID,
      };
      axios.post('/api/qa/questions/', config)
        .then(update)
        .catch((err) => console.log(err));
      setShow(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h3>Ask Your Question</h3>
            <h4>About the {productName}</h4>
          </div>
          <div className="modal-body">
            YourName:
            <input
              placeholder="Example: jackson11!"
              onChange={handleNameChange}
              maxLength="60"
              required
            />
            Email:
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Example: jackson11@random.email"
              onChange={handleEmailChange}
              maxLength="60"
              required
            />
            Question:
            <textarea
              type="text"
              rows="8"
              cols="50"
              placeholder="your question"
              onChange={handleQuestionChange}
              maxLength="1000"
              required
            />
            For privacy reasons, do not use your full name or email address
            For authentication reasons, you will not be emailed
          </div>
          <div className="modal-footer">
            <button type="submit" onClick={handleSubmit}> Submit </button>
            <button type="button" onClick={() => { setShow(false); }}> Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
