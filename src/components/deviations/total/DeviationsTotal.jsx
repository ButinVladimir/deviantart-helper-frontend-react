import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Tabs from 'react-bulma-components/lib/components/tabs';
import DeviationsTotalForm from './DeviationsTotalFormContainer';
import DeviationsTotalValuesTab from './DeviationsTotalValuesTabContainer';
import DeviationsTotalChartTab from './DeviationsTotalChartTabContainer';
import CustomLoader from '../../shared/CustomLoader';
import * as tabs from '../../../consts/tabs';
import convertTabs from '../../../helpers/convert-tabs';

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
      changeTabHandler,
    } = this.props;

    const mappedTabs = convertTabs(tabs.deviationTotalTabs, tab, changeTabHandler);

    return (
      <>
        <DeviationsTotalForm />

        <Section>
          <Container>
            <Tabs type="toggle">
              {mappedTabs}
            </Tabs>
          </Container>
        </Section>

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
  changeTabHandler: PropTypes.func.isRequired,
  preloadStatisticsHandler: PropTypes.func.isRequired,
};
