import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import styles from '../styles';

class TimeTable extends React.Component {
  render() {
    const { punchTimes, article } = this.props;

    let timeHeader = punchTimes.map((time, index) => {
      moment.locale('pt-br');

      const shifts = [
        {
          timeIn: moment('2019-07-01 09:05:07'),
          timeOut: moment('2019-07-01 11:47:20'),
        },
        {
          timeIn: moment('2019-07-01 12:47:07'),
          timeOut: moment('2019-07-01 18:32:50'),
        },
      ];
      const durations = [];

      shifts.map((shift, index) => {
        const currentDiff = shift.timeOut.diff(shift.timeIn);
        const currentDuration = moment.duration(currentDiff);
        const currentPeriod =
            Math.floor(currentDuration.asHours()) +
            moment.utc(currentDiff).format(':mm:ss');
        durations.push(currentPeriod);

        console.log('####durations', durations);

        return false;
      });

      const totalDurations = durations
        .slice(1)
        .reduce(
          (prev, cur) => moment.duration(cur).add(prev),
          moment.duration(durations[0])
        );
      console.log(
        `Total time is: ${moment
          .utc(totalDurations.asMilliseconds())
          .format('HH:mm:ss')}`
      );

      if (index % 2 === 0) {
        return (
          <td key={time + index} style={styles.tdHeaderStyle}>
            In
          </td>
        );
      }

      return (
        <td key={time + index} style={styles.tdHeaderStyle}>
          Out
        </td>
      );
    });

    let displayedTime = punchTimes.map((time, index) => (
      <td key={time + index} style={styles.tdBodyStyle}>
        {time}
      </td>
    ));

    // let showArticle = article ? (
    //   <article style={styles.articleStyle}>
    //     <div>
    //       <h1>{article.title}</h1>
    //       <img style={styles.imgStyle} src={article.urlToImage} alt="" />
    //       <h4>{article.description}</h4>
    //       <a href={article.url} target="_blank" rel="noopener noreferrer">
    //         READ MORE
    //       </a>
    //     </div>
    //   </article>
    // ) : null;

    return (
      <div>
        {/* {showArticle} */}
        <table style={styles.tableStyle}>
          <thead>
            <tr>{timeHeader}</tr>
          </thead>
          <tbody>
            <tr>{displayedTime}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.news,
});

export default connect(
  mapStateToProps,
  null
)(TimeTable);

//export default TimeTable;
