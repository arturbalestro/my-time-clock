import React from 'react';
import PunchClockButton from '../components/PunchClockButton';
import TimeTable from '../components/TimeTable';
import RealTimeClock from '../components/RealTimeClock';

class PunchClockContainer extends React.Component {
  state = {
    punchTimes: [],
  };

  getCurrentTime = value => {
    this.setState({ punchTimes: value });
  };

  render() {
    const { punchTimes } = this.state;
    console.log('#####punchTimes', punchTimes);

    return (
      <div>
        <h1>Register your time below</h1>
        <RealTimeClock />
        <TimeTable punchTimes={punchTimes} />

        <PunchClockButton
          getCurrentTime={this.getCurrentTime}
          punchTimes={punchTimes}
        />
      </div>
    );
  }
}

export default PunchClockContainer;
