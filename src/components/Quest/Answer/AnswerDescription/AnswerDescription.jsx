import React from 'react';
import Player from './../../../Media/Player/Player';
import './AnswerDescription.css';

function AnswerDescription({hasAnswer, bird}) {
  if (hasAnswer) {
    return (
      <div className="Game_block Answer_description">
        <div className="Question__block__image">
          <img
            src={bird.image}
            alt={bird.name}
          />
        </div>
        <div className="Question__block__quest">
          <div className="Question__block__quest__title">
            {bird.name}
          </div>
          <hr />
          <div className="Question__block__quest__species">
            {bird.species}
          </div>
          <hr />
          <div className="Question__block__quest__player">
            <Player
              source={bird.audio}
            />
          </div>
        </div>

        <div class="break"></div>
        
        <div class="Answer_description__description">
          {bird.description}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Game_block Answer_description">
        <div className="Answer_description__default_block">
        Послушайте плеер.
        <br />
        Выберите птицу из списка
        </div>
      </div>
    );
  }
}

export default AnswerDescription;
