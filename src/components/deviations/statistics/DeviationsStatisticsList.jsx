import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import DeviationsPreview from '../shared/DeviationsPreview';

export default function DeviationsStatisticsList({
  deviations,
  selectedIds,
  toggleSelectionHandler,
}) {
  const mappedDeviations = deviations.map(d => (
    <DeviationsPreview
      key={d.id}
      selected={selectedIds.includes(d.id)}
      toggleSelectionHandler={toggleSelectionHandler}
      {...d}
    />
  ));

  const titlesMap = new Map();
  deviations.forEach(d => titlesMap.set(d.id, d.title));

  return (
    <Section>
      <Container>
        <ul>
          {mappedDeviations}
        </ul>
      </Container>
    </Section>
  );
}

DeviationsStatisticsList.propTypes = {
  deviations: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleSelectionHandler: PropTypes.func.isRequired,
};
