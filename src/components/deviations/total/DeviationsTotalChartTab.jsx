import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Chart from '../shared/DeviationsChartContainer';

export default function DeviationsTotalChartTab({
  metadata,
}) {
  const titlesMap = new Map();
  titlesMap.set('value', 'Value');
  const convertedMetadata = metadata ? { value: metadata } : {};

  return (
    <Section>
      <Container>
        <Chart
          metadata={convertedMetadata}
          titlesMap={titlesMap}
        />
      </Container>
    </Section>
  );
}

DeviationsTotalChartTab.propTypes = {
  metadata: PropTypes.arrayOf(PropTypes.array),
};

DeviationsTotalChartTab.defaultProps = {
  metadata: null,
};
