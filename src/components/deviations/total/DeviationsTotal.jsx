import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeviationsTotalForm from './DeviationsTotalFormContainer';
import DeviationsTotalValuesTab from './DeviationsTotalValuesTabContainer';
import DeviationsTotalChartTab from './DeviationsTotalChartTabContainer';
import CustomLoader from '../../shared/CustomLoader';
import * as tabs from '../../../consts/tabs';

export default class DeviationsTotal extends Component {
  componentDidMount() {
    const { clearDataHandler, preloadStatisticsHandler } = this.props;

    clearDataHandler();
    preloadStatisticsHandler();
  }

  render() {
    const {
      tab,
      totalLoading,
    } = this.props;

    return (
      <>
        <DeviationsTotalForm />

        {totalLoading && <CustomLoader />}

        {!totalLoading && (
          <>
            {tab === tabs.STATS && <DeviationsTotalValuesTab />}
            {tab === tabs.CHART && <DeviationsTotalChartTab />}
          </>
        )}
      </>
    );
  }
}

DeviationsTotal.propTypes = {
  tab: PropTypes.string.isRequired,
  totalLoading: PropTypes.bool.isRequired,
  clearDataHandler: PropTypes.func.isRequired,
  preloadStatisticsHandler: PropTypes.func.isRequired,
};
