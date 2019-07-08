import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import DeviationsPreview from '../shared/DeviationsPreview';

export default function DeviationsBrowseList({
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

  return (
    <Section>
      <Container>
        {mappedDeviations}
      </Container>
    </Section>
  );
}


DeviationsBrowseList.propTypes = {
  deviations: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleSelectionHandler: PropTypes.func.isRequired,
};
