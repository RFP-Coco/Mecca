/* eslint-disable react/no-array-index-key */
import React from 'react';
import axios from 'axios';
import { Image } from 'cloudinary-react';

export default function ImageModal({ display, photos, setPhotos }) {
  const addImage = (files) => {
    if (!files[0]) {
      return null;
    }
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'msmob63c');

    axios.post('https://api.cloudinary.com/v1_1/dfxarumgq/image/upload', formData)
      .then((res) => {
        console.log(res.data.url);
        setPhotos([...photos, res.data.url]);
      });
    return null;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
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
          {photos.length < 5 && (
            <input
              type="file"
              onChange={(e) => { addImage(e.target.files); }}
            />
          )}
          <div
            className="submit-img-buttons"
          >
            <button
              type="button"
              onClick={() => { display(false); }}
            > Submit
            </button>
            <button
              type="button"
              onClick={() => {
                display(false);
                setPhotos([]);
              }}
            > Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
