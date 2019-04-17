import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeviationsStatistic from './DeviationsStatistic';
import Config from '../../../config/config';
import DeviationsChart from '../DeviationsChart';

export default class DeviationsStatisticsData extends Component {
  componentDidMount() {
    const { preloadDeviationsHandler } = this.props;
    preloadDeviationsHandler();
  }

  render() {
    const {
      deviations,
      chartType,
      metadata,
      chartTypeChangeHandler,
    } = this.props;
    const mappedDeviations = deviations.map(d => (
      <DeviationsStatistic key={d.id} {...d} />
    ));
    const titles = new Map();
    deviations.forEach(d => titles.set(d.id, d.title));

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
        <DeviationsChart
          metadata={metadata}
          titles={titles}
          chartType={chartType}
          chartTypeChangeHandler={chartTypeChangeHandler}
        />
      </div>
    );
  }
}

DeviationsStatisticsData.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
  deviations: PropTypes.arrayOf(PropTypes.any).isRequired,
  metadata: PropTypes.arrayOf(PropTypes.any).isRequired,
  chartType: PropTypes.string.isRequired,
  preloadDeviationsHandler: PropTypes.func.isRequired,
  chartTypeChangeHandler: PropTypes.func.isRequired,
};
