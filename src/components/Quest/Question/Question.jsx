import React from 'react';
import Player from './../../Media/Player/Player';
import './Question.css';

function Question({name, image, audio}) {
  return (
    <div className="Game_block Question__block">
      <div className="Question__block__image">
        <img
          src={image}
          alt="птичка"
          width="200"
        />
      </div>
      <div className="Question__block__quest">
        <div className="Question__block__quest__title">
          {name}
        </div>
        <hr />
        <div className="Question__block__quest__player">
          <Player
            source={audio}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
