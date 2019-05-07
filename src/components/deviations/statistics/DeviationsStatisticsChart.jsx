import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Chart from '../shared/DeviationsChartContainer';

export default function DeviationsStatisticsList({
  deviations,
  metadata,
}) {
  const titlesMap = new Map();
  deviations.forEach(d => titlesMap.set(d.id, d.title));

  return (
    <Section>
      <Container>
        <Chart
          metadata={metadata || {}}
          titlesMap={titlesMap}
        />
      </Container>
    </Section>
  );
}

DeviationsStatisticsList.propTypes = {
  deviations: PropTypes.arrayOf(PropTypes.any).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  metadata: PropTypes.object,
};

DeviationsStatisticsList.defaultProps = {
  metadata: null,
};
