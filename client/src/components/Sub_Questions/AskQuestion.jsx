import React, { useState } from 'react';
import axios from 'axios';

export default function AskQuestion({ setShow, productID, update }) {
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
  const handleSubmit = () => {
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
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Ask Questions </h3>
        </div>
        <div className="modal-body">
          YourName:
          <input placeholder="Your Name" onChange={handleNameChange} />
          Email:
          <input placeholder="email" onChange={handleEmailChange} />
          Question:
          <input type="text" placeholder="your question" onChange={handleQuestionChange} />
        </div>
        <div className="modal-footer">
          <button type="button" onClick={handleSubmit}> ask </button>
          <button type="button" onClick={() => { setShow(false); }}> cancel</button>
        </div>
      </div>
    </div>
  );
}
