import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DeviationsStatisticsForm from './DeviationsStatisticsFormContainer';
import DeviationsStatisticsList from './DeviationsStatisticsListContainer';
import DeviationsStatisticsChart from './DeviationsStatisticsChartContainer';
import DeviationsStatisticsPagination from './DeviationsStatisticsPaginationContainer';
import CustomLoader from '../../shared/CustomLoader';
import * as tabs from '../../../consts/tabs';

export default class DeviationsStatistics extends PureComponent {
  componentDidMount() {
    const { clearDataHandler, preloadDeviationsHandler } = this.props;

    clearDataHandler();
    preloadDeviationsHandler();
  }

  render() {
    const {
      tab,
      pageLoading,
    } = this.props;

    return (
      <>
        <DeviationsStatisticsForm />

        {pageLoading && <CustomLoader />}

        {!pageLoading && (
          <>
            {tab === tabs.LIST && <DeviationsStatisticsList />}
            {tab === tabs.CHART && <DeviationsStatisticsChart />}
          </>
        )}

        <DeviationsStatisticsPagination />
      </>
    );
  }
}

DeviationsStatistics.propTypes = {
  tab: PropTypes.string.isRequired,
  pageLoading: PropTypes.bool.isRequired,
  clearDataHandler: PropTypes.func.isRequired,
  preloadDeviationsHandler: PropTypes.func.isRequired,
};
