import React from 'react';
import Header from './components/Header/Header';
import './Game.css';

function Game() {
  let score = 0;

  return (
    <div className="App">
      <Header
        score={score}
      />
    </div>
  );
}

export default Game;
