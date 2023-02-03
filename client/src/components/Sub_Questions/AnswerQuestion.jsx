/* eslint-disable no-alert */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import ImageModal from './ImageModal.jsx';

export default function AnswerQuestion({
  question, setShow, fetchAnswers, productName,
}) {
  const [displayModal, setDisplayModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);

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
        photos,
      };
      axios.post(`/api/qa/questions/${question.question_id}/answers`, config)
        .then(fetchAnswers)
        .catch((err) => console.log(err));
      setShow(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h3>Submit your Answer</h3>
            <h4>{productName} : {question.question_body}</h4>
          </div>
          <div className="modal-body">
            YourName:
            <input
              placeholder="Example: jackson11!"
              onChange={(e) => { setName(e.target.value); }}
              maxLength="60"
              required
            />
            Email:
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Example: jackson11@random.email"
              onChange={(e) => { setEmail(e.target.value); }}
              maxLength="60"
              required
            />
            Answer:
            <textarea
              type="text"
              rows="8"
              cols="50"
              placeholder="your answer"
              onChange={(e) => { setBody(e.target.value); }}
              maxLength="1000"
              required
            />
            <div className="images">
              {photos.map((photo, index) => (
                <Image
                  key={index}
                  style={{ width: 100 }}
                  cloudName="dfxarumgq"
                  publicId={photo}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => { setDisplayModal(true); }}
            > Add Image
            </button>
            {displayModal && (
              <ImageModal
                display={setDisplayModal}
                photos={photos}
                setPhotos={setPhotos}
              />
            )}
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
