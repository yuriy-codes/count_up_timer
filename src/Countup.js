import React, { Component } from 'react';
import PropTypes from 'prop-types'

/**
 * Note : 
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead. 
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

class Countup extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.date);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountup(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countUp when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  calculateCountup(startDate) {
    let diff = (Date.parse(new Date()) - Date.parse(new Date(startDate))) / 1000;
    console.log(Date.parse(new Date()))
    console.log(Date.parse(new Date(startDate)))
    console.log(diff)
    // clear countUp when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countUp = this.state;

    return (
      <div className="countUp">
      <span className="countUp-col">
          <span className="countUp-col-element">
              <strong>{this.addLeadingZeros(countUp.years)}</strong>
              <span>{countUp.days === 1 ? 'Year' : 'Years'}</span>
          </span>
        </span>

        <span className="countUp-col">
          <span className="countUp-col-element">
              <strong>{this.addLeadingZeros(countUp.days)}</strong>
              <span>{countUp.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className="countUp-col">
          <span className="countUp-col-element">
            <strong>{this.addLeadingZeros(countUp.hours)}</strong>
            <span>Hours</span>
          </span>
        </span>


        <span className="countUp-col">
          <span className="countUp-col-element">
            <strong>{this.addLeadingZeros(countUp.min)}</strong>
            <span>Min</span>
          </span>
        </span>

        <span className="countUp-col">
          <span className="countUp-col-element">
            <strong>{this.addLeadingZeros(countUp.sec)}</strong>
            <span>Sec</span>
          </span>
        </span>
      </div>
    );
  }
}

Countup.propTypes = {
  date: PropTypes.string.isRequired
};

Countup.defaultProps = {
  date: new Date()
};

export default Countup;
