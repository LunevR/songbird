import React from 'react';
import './Finish.css';

function Finish({score, restartLevelHandler}) {
  return (
    <div className="Game_block Finish_block">
      <div className="Finish_block__main">
        Поздравляем!
      </div>
      <div className="Finish_block__score">
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </div>
      <button
        className="Restart_level_button"
        onClick={restartLevelHandler}
      >Начать сначала</button>
    </div>
  );
}

export default Finish;
