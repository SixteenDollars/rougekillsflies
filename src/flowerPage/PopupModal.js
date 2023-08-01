import React, { useState } from 'react';
import './PopupModal.css';
import ReactPlayer from 'react-player'

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div class="album-title">
                <h1 class="album-text">"War!"</h1>
            </div>
            <div class="under-title">
                <h1 class="under-text">click X to listen to the album</h1>
            </div>
            <div class="youtube-player-2">
                    <ReactPlayer
                        url="https://youtu.be/05FIFwcGhbI"
                        controls
                    />
                </div>
            <button className="close-btn" onClick={closeModal}>
            <h1 class="under-text">ENTER EXHIBIT</h1>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;