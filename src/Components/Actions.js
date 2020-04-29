import React, { Component } from 'react';

export class Actions extends Component {
  render() {
    let time =
      this.props.timerState !== 'running' ? (
        <button className='start' onClick={this.props.startTime}>
          Start
        </button>
      ) : (
        <button className='stop' onClick={this.props.stopTime}>
          Stop
        </button>
      );

    let lap =
      this.props.timerState === 'running' ? (
        <button className='lap' onClick={this.props.lapTime}>
          Lap
        </button>
      ) : (
        <button className='lap' disabled>
          Lap
        </button>
      );

    let pause =
      this.props.timerState === 'running' ? (
        <button className='pause' onClick={this.props.pauseTime}>
          Pause
        </button>
      ) : (
        <button className='pause' disabled>
          Pause
        </button>
      );

    return (
      <div>
        {time}
        {lap}
        {pause}
      </div>
    );
  }
}

export default Actions;
