import React from 'react';
import moment from 'moment';

class RealTimeClock extends React.Component {
  state = {
    time: moment().format('DD/MM/YYYY, h:mm:ss'),
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: moment().format('DD/MM/YYYY, h:mm:ss'),
    });
  }

  render() {
    const { time } = this.state;

    return (
      <div
        style={{
          border: '2px solid black',
          borderRadius: '100px',
          display: 'inline-block',
          fontSize: '22px',
          width: '155px',
          height: '100px',
          textAlign: 'center',
          background: 'lavender',
          padding: '60px 10px 10px',
        }}
      >
        {time}
      </div>
    );
  }
}

export default RealTimeClock;
