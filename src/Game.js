import React from 'react';
import Header from './components/Header/Header';
import './Game.css';

function Game() {
  let score = 0;
  let step = 1;

  return (
    <div className="App">
      <Header
        score={score}
        step={step}
      />
    </div>
  );
}

export default Game;
