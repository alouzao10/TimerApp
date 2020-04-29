import React, { Component } from 'react';
import './App.css';

import Time from './Components/Time';
import Actions from './Components/Actions';
import Laps from './Components/Laps';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      format: '00:00:00', // HH:MM:SS
      timerState: 'stop',
      lap: 0,
      laps: [],
    };

    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);

    this.pauseTime = this.pauseTime.bind(this);
    this.lapTime = this.lapTime.bind(this);

    //this.startTime();
  }

  startTime = () => {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        format: this.formatTime(this.state.time + 1),
        timerState: 'running',
      });
    }, 1000);

    console.log('Timer Started...');
  };

  stopTime = () => {
    clearInterval(this.timer);
    this.setState({
      time: 0,
      format: '00:00:00',
      timerState: 'stop',
      lap: 0,
      laps: [],
    });

    console.log('...Timer Stoped');
  };

  pauseTime = () => {
    clearInterval(this.timer);
    this.setState({ timerState: 'stop' });
  };

  lapTime = () => {
    let laps = this.state.laps;
    laps.push(this.state.time);
    this.setState({ lap: this.state.time, laps });

    console.log('Lapped, ', this.state.lap);
  };

  formatTime = (secs) => {
    let date = new Date(null);
    date.setSeconds(secs);
    let formattedTime = date.toISOString().substr(11, 8);

    return formattedTime;
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h3>
            Timer<span>App</span>
          </h3>
        </header>
        <Time time={this.state.format} />
        <Actions
          timerState={this.state.timerState}
          startTime={this.startTime}
          stopTime={this.stopTime}
          pauseTime={this.pauseTime}
          lapTime={this.lapTime}
        />
        <Laps laps={this.state.laps} formatTime={this.formatTime} />
      </div>
    );
  }
}

export default App;
