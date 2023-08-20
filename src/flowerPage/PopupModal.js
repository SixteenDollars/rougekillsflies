import React, { useState } from 'react';
import './PopupModal.css';
import ReactPlayer from 'react-player'
import mask from '../resources/images/Frame 4.png'

const PopupModal = () => {
  let audio = new Audio('songs/NailBomb.wav');

  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    audio.play()
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div class="album-title">
                <h1 class="album-text">"War!" (2021)</h1>
            </div>
            <img id="mask-new" 
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://album.link/i/1559758015';
              }}
            class="mx-auto d-block" src={mask} alt=""></img>
            <div class="under-title-2">
                <h1 class="under-text-2">click on gas mask to listen to the album</h1>
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