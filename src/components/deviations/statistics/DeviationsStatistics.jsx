import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Tabs from 'react-bulma-components/lib/components/tabs';
import DeviationsStatisticsForm from './DeviationsStatisticsFormContainer';
import DeviationsStatisticsList from './DeviationsStatisticsListContainer';
import DeviationsStatisticsChart from './DeviationsStatisticsChartContainer';
import DeviationsStatisticsPagination from './DeviationsStatisticsPaginationContainer';
import CustomLoader from '../../shared/CustomLoader';
import * as tabs from '../../../consts/tabs';
import convertTabs from '../../../helpers/convert-tabs';

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
      changeTabHandler,
    } = this.props;

    const mappedTabs = convertTabs(tabs.deviationStatisticsTabs, tab, changeTabHandler);

    return (
      <>
        <DeviationsStatisticsForm />

        <Section>
          <Container>
            <Tabs type="toggle">
              {mappedTabs}
            </Tabs>
          </Container>
        </Section>

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
  changeTabHandler: PropTypes.func.isRequired,
  preloadDeviationsHandler: PropTypes.func.isRequired,
};
