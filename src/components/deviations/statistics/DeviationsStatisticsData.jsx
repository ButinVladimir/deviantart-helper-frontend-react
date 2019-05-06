import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeviationsStatistic from './DeviationsStatistic';
import Chart from '../shared/DeviationsChartContainer';

export default class DeviationsStatisticsData extends Component {
  componentDidMount() {
    const { preloadDeviationsHandler } = this.props;
    preloadDeviationsHandler();
  }

  render() {
    const {
      deviations,
      metadata,
    } = this.props;

    const mappedDeviations = deviations.map(d => (
      <DeviationsStatistic key={d.id} {...d} />
    ));

    const titlesMap = new Map();
    deviations.forEach(d => titlesMap.set(d.id, d.title));

    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Deviation</td>
              <td>Views</td>
              <td>Favourites</td>
              <td>Comments</td>
              <td>Downloads</td>
            </tr>
          </thead>
          <tbody>
            {mappedDeviations}
          </tbody>
        </table>
        <Chart
          metadata={metadata}
          titlesMap={titlesMap}
        />
      </div>
    );
  }
}

DeviationsStatisticsData.propTypes = {
  deviations: PropTypes.arrayOf(PropTypes.any).isRequired,
  metadata: PropTypes.arrayOf(PropTypes.any).isRequired,
  preloadDeviationsHandler: PropTypes.func.isRequired,
};
