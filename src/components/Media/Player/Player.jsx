import React, { PureComponent } from 'react';
import './Player.css';
import 'font-awesome/css/font-awesome.min.css';
import { format, toDate } from 'date-fns';

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this.playerInstance = new Audio(props.source);

    this.playerInstance.onloadedmetadata = () => this.setState({
      duration: this.playerInstance.duration.toFixed(1)
    });

    this.playerInstance.ontimeupdate = () => this.setState({
      currentTime: this.playerInstance.currentTime.toFixed(1)
    });

    this.playerInstance.onended = () => this.setState({
      isPlayd: false,
      currentTime: 0,
    });

    this.state = {
      isPlayd: false,
      duration: 0,
      currentTime: 0,
    };

    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.rewind = this.rewind.bind(this);
  }

  pause() {
    this.playerInstance.pause();
    this.setState({
      isPlayd: false,
    })
  }

  play() {
    this.playerInstance.play();
    this.setState({
      isPlayd: true,
    })
  }

  rewind(value) {
    this.playerInstance.currentTime = value;
  }

  render() {
    let controlIcon;

    if (this.state.isPlayd) {
      controlIcon = <i
        className="audio_player__control_element fa fa-pause-circle"
        onClick={this.pause}
      ></i>;
    } else {
      controlIcon = <i
        className="audio_player__control_element fa fa-play-circle"
        onClick={this.play}
      ></i>;
    }

    return (
      <div className="audio_player">
        <div className="audio_player__control">
          {controlIcon}
        </div>
        <div className="audio_player__way">
          <input
            type="range"
            value={this.state.currentTime}
            min="0"
            step="0.1"
            max={this.state.duration}
            onChange={(event) => {this.rewind(event.target.value)}}
          />
          <progress
            value={this.state.currentTime}
            max={this.state.duration}
          ></progress>
          <div className="audio_player__timing">
            <span>{format(toDate(this.state.currentTime * 1000), 'mm:ss')}</span>
            <span>{format(toDate(this.state.duration * 1000), 'mm:ss')}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
