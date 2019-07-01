import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { getNews } from '../actions';

class PunchClockButton extends React.Component {
  handlePunchTime = () => {
    const { getCurrentTime, punchTimes, getNews } = this.props;

    moment.locale('pt-br');
    const currentTime = moment().format('YYYY-MM-DD hh:mm:ss');
    console.log('####current Time', currentTime);

    getNews();

    if (punchTimes.length < 4) {
      punchTimes.push(currentTime);
      getCurrentTime(punchTimes);
    }
  };

  render() {
    return (
      <div>
        <button
          style={{
            display: 'inline-block',
            background: '#bada55',
            border: '2px solid limegreen',
            fontWeight: 'bold',
            padding: '10px',
            marginTop: '10px',
          }}
          onClick={this.handlePunchTime}
        >
          Punch clock
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getNews: getNews,
};

export default connect(
  null,
  mapDispatchToProps
)(PunchClockButton);
