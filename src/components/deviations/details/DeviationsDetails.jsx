import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Tabs from 'react-bulma-components/lib/components/tabs';
import Level from 'react-bulma-components/lib/components/level';
import Loader from 'react-bulma-components/lib/components/loader';
import DeviationsDetailsDescriptionTab from './DeviationsDetailsDescriptionTabContainer';
import DeviationsDetailsPreviewTab from './DeviationsDetailsPreviewTabContainer';
import DeviationsDetailsChartTab from './DeviationsDetailsChartTabContainer';
import Config from '../../../config/config';
import * as tabs from '../../../consts/tabs';

export default class DeviationsDetails extends Component {
  componentDidMount() {
    const { clearDataHander, loadDeviationDetailsHandler } = this.props;

    clearDataHander();
    loadDeviationDetailsHandler();
  }

  render() {
    const {
      config,
      title,
      tab,
      detailsLoading,
      changeTabHandler,
    } = this.props;

    const tabTitles = [
      [tabs.DESCRIPTION, 'Description'],
      [tabs.PREVIEW, 'Preview'],
      [tabs.CHART, 'Chart'],
    ];
    const mappedTabs = tabTitles.map(t => (
      <Tabs.Tab key={t[0]} active={tab === t[0]} onClick={changeTabHandler(t[0])}>
        {t[1]}
      </Tabs.Tab>
    ));

    return (
      <>
        <Section>
          <Container>
            <Content>
              <Heading size={3}>{detailsLoading ? 'Deviation details' : title}</Heading>
            </Content>
            <Tabs type="toggle">
              {mappedTabs}
            </Tabs>
          </Container>
        </Section>

        {detailsLoading && (
          <Section>
            <Container>
              <Level>
                <Level.Item>
                  <Loader className="custom-loader" />
                </Level.Item>
              </Level>
            </Container>
          </Section>
        )}
        {!detailsLoading && (
          <>
            {tab === tabs.DESCRIPTION && <DeviationsDetailsDescriptionTab />}
            {tab === tabs.PREVIEW && <DeviationsDetailsPreviewTab />}
            {tab === tabs.CHART && <DeviationsDetailsChartTab config={config} />}
          </>
        )}
      </>
    );
  }
}

DeviationsDetails.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
  title: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  detailsLoading: PropTypes.bool.isRequired,
  clearDataHander: PropTypes.func.isRequired,
  changeTabHandler: PropTypes.func.isRequired,
  loadDeviationDetailsHandler: PropTypes.func.isRequired,
};
