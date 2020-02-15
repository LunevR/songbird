import React, { PureComponent } from 'react';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import './Game.css';
import defaultBird from './images/default-bird.jpg';
import birdsData from './files/QuestionsData';

class Game extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      step: 1,
      isCorrectAnswer: false,
      currentPack: birdsData[0],
      correctBird: this.generateQuestion(birdsData[0]),
    }
  }

  generateQuestion(currentPack) {
    const index = Math.floor(Math.random() * currentPack.length);
    const currentBird = currentPack[index];

    return currentBird;
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          step={this.state.step}
        />
        <Question
          image={this.state.isCorrectAnswer ? this.state.correctBird.image : defaultBird}
          name={this.state.isCorrectAnswer ? this.state.correctBird.name : "*****"}
          audio={this.state.correctBird.audio}
        />
      </div>
    );
  }
}

export default Game;
