import React, { Component } from 'react';
import Countup from './Countup';
import './timer.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  render() {
    const { selectedDay } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>React Countdown</h2>

        </div>
        <div>
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Choose a day</p>}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>

        <h3 className="title">Counting up!</h3>
        <Countup date={selectedDay} />
      </div>
      
    );
  }
}

export default Timer;