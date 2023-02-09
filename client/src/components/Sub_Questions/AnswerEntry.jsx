import React, { useState } from 'react';
import axios from 'axios';
import { parseISO, format } from 'date-fns';
import { Image } from 'cloudinary-react';

export default function AnswerEntry({ answer, updateAnswers }) {
  const [reported, setReported] = useState(false);
  const [voted, setVoted] = useState(false);
  const handleHelpful = () => {
    axios.put(`/api/qa/answers/${answer.answer_id}/helpful`)
      .then(updateAnswers)
      .catch((err) => {
        console.log(err);
      });
    setVoted(true);
  };

  const handleReport = () => {
    axios.put(`/api/qa/answers/${answer.answer_id}/report`)
      .then()
      .catch((err) => {
        console.log(err);
      });
    setReported(true);
  };
  return (
    <div>
      <div className="answer-entry">
        <span className="answer-item">A:</span> {answer.body}
        <div className="images">
          {answer.photos.map((photo, ind) => (
            <Image
              key={ind}
              style={{ width: 100 }}
              cloudName="dfxarumgq"
              publicId={photo.url}
            />
          ))}
        </div>
      </div>
      <div className="answer-info">
        by {answer.answerer_name}  {format(parseISO(answer.date), 'LLLL d, yyyy')}   |  <span className="helpful">Helpful?</span>
        {voted
          ? (
            <span>Yes({answer.helpfulness})</span>
          )
          : (
            <button
              className="stringbutton helpful"
              type="button"
              onClick={handleHelpful}
            >
              Yes({answer.helpfulness})
            </button>
          )}
        {reported
          ? (
            <>
              Reported
            </>
          )
          : (
            <button
              className="stringbutton report"
              type="button"
              onClick={handleReport}
            >
              Report
            </button>
          )}
      </div>
    </div>
  );
}
