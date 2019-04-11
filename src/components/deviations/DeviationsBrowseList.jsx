import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DeviationsPreview from './DeviationsPreview';

export default function DeviationsBrowseList({
  deviations,
}) {
  const mappedDeviations = deviations.map(d => (
    <DeviationsPreview {...d} />
  ));

  return (
    <Fragment>
      {mappedDeviations}
    </Fragment>
  );
}

DeviationsBrowseList.propTypes = {
  deviations: PropTypes.arrayOf(PropTypes.any).isRequired,
};
