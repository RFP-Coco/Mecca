import React from 'react';
import axios from 'axios';
import { Image } from 'cloudinary-react';

export default function ReviewImageModalContent({ photoURLs, setShowImgModal, setPhotoURLs }) {
  /**
   * uploads a file
   * @param {object} file A file array that contains file objects
   */
  const uploadFile = (files) => {
    // if user decides not to upload, this function does nothing.
    if (!files[0]) return null;

    const imgConfig = new FormData();
    imgConfig.append('file', files[0]);
    imgConfig.append('upload_preset', 'wtgoio26');

    // optimaize with a conditional post
    axios.post('https://api.cloudinary.com/v1_1/do544o5be/image/upload', imgConfig)
      .then((result) => {
        setPhotoURLs([...photoURLs, result.data.url]);
      });
    return null;
  };

  return (
    <div className="img-modal-container">
      <button
        className="return-btn-container"
        type="button"
        onClick={() => { setShowImgModal(false); setPhotoURLs([]); }}
      >X
      </button>
      <div>
        <button
          type="button"
          className="choose-btn-container"
          style={photoURLs.length >= 5 ? { visibility: 'hidden' } : { visibility: 'visible' }}
        >
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={(event) => uploadFile(event.target.files)}
          />
        </button>
        <div className="images">
          {photoURLs.map((photoURL) => (
            <Image
              style={{ width: 150 }}
              cloudName="do544o5be"
              publicId={photoURL}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowImgModal(false)}
        >submit photos
        </button>
      </div>
    </div>
  );
};