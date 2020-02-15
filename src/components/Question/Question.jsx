import React from 'react';
import Player from './../Media/Player/Player';
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
          <Player
            source="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
