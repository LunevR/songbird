import React from 'react';
import './Question.css';

function Question() {
  return (
    <div className="Question__block">
      <div className="Question__block__image">
        <img
          src="https://klike.net/uploads/posts/2019-05/medium/1558693548_2.jpg"
          alt="птичка"
          width="200"
        />
      </div>
      <div className="Question__block__quest">
        <div className="Question__block__quest__title">
          Ястреб
        </div>
        <hr />
        <div className="Question__block__quest__player">
          <audio controls>
            <source src="audio/music.ogg" type="audio/ogg; codecs=vorbis" />
            <source src="audio/music.mp3" type="audio/mpeg" />
            Тег audio не поддерживается вашим браузером.
            <a href="audio/music.mp3">Скачайте музыку</a>.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default Question;
