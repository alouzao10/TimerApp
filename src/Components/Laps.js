import React, { Component } from 'react';

export class Laps extends Component {
  compare = (a, b) => {
    return a - b;
  };

  render() {
    return (
      <div className='laps'>
        {this.props.laps.sort(this.compare).map((lapTime, i) => (
          <div className='lap' key={i}>
            Lap: {this.props.formatTime(lapTime)}
          </div>
        ))}
      </div>
    );
  }
}

export default Laps;
