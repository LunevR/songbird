import React, { PureComponent } from 'react';
import Header from './components/Header/Header';
import Question from './components/Quest/Question/Question';
import AnswerList from './components/Quest/Answer/AnswerList/AnswerList';
import AnswerDescription from './components/Quest/Answer/AnswerDescription/AnswerDescription';
import Finish from './components/Finish/Finish';
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
      answerList: this.generateAnswerList(birdsData[0]),
      localScore: 5,
      hasAnswer: false,
      bird: {},
    };

    this.generateQuestion = this.generateQuestion.bind(this);
    this.generateAnswerList = this.generateAnswerList.bind(this);
    this.answerClickHandler = this.answerClickHandler.bind(this);
    this.nextLevelHandler = this.nextLevelHandler.bind(this);
    this.restartLevelHandler = this.restartLevelHandler.bind(this);
  }

  generateQuestion(currentPack) {
    const index = Math.floor(Math.random() * currentPack.length);
    const currentBird = currentPack[index];

    return currentBird;
  }

  generateAnswerList(currentPack) {
    return currentPack.map(item => {
      return {
        name: item.name,
        status: item.status || "default",
        id: item.id,
      }
    });
  }

  answerClickHandler(id) {
    if (!this.state.isCorrectAnswer) {
      let status;

      if (id === this.state.correctBird.id) {
        status = "correct";
        this.setState({
          isCorrectAnswer: true,
          score: this.state.score + this.state.localScore,
          localScore: 5,
        });
      } else {
        status = "incorrect";
        this.setState({
          localScore: this.state.localScore ? this.state.localScore - 1 : 0,
        });
      }

      let answerList = this.state.answerList.map(item => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            status: status,
          }
        }

        return item;
      });

      this.setState({answerList: answerList});
    }

    let answer = this.state.currentPack.find(item => item.id === id);

    this.setState({
      hasAnswer: true,
      bird: answer,
    });
  }

  nextLevelHandler() {
    if (this.state.isCorrectAnswer) {
      if(this.state.step === 6) {
        this.setState({
          step: this.state.step + 1,
        });
      } else {
        this.setState({
          step: this.state.step + 1,
          isCorrectAnswer: false,
          currentPack: birdsData[this.state.step],
          correctBird: this.generateQuestion(birdsData[this.state.step]),
          answerList: this.generateAnswerList(birdsData[this.state.step]),
          localScore: 5,
          hasAnswer: false,
          bird: {},
        });
      }
    }
  }

  restartLevelHandler() {
    this.setState({
      step: 1,
      isCorrectAnswer: false,
      currentPack: birdsData[this.state.step],
      correctBird: this.generateQuestion(birdsData[0]),
      answerList: this.generateAnswerList(birdsData[0]),
      localScore: 5,
      score: 0,
      hasAnswer: false,
      bird: {},
    });
  }

  render() {
    if (this.state.step < 7) {
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
          <div className="Answer_section">
            <AnswerList
              answerList={this.state.answerList}
              onClick={this.answerClickHandler}
            />
            <AnswerDescription
              bird={this.state.bird}
              hasAnswer={this.state.hasAnswer}
            />
          </div>
          <button
            className="Next_level_button"
            disabled={!this.state.isCorrectAnswer}
            onClick={this.nextLevelHandler}
          >Следующий уровень</button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header
            score={this.state.score}
            step={this.state.step}
          />
          <Finish
            score={this.state.score}
            restartLevelHandler={this.restartLevelHandler}
          />
        </div>
      );
    }
  }
}

export default Game;
