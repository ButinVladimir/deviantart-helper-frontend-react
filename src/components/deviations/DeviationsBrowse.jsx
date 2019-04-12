import React from 'react';
import PropTypes from 'prop-types';
import DeviationsBrowseForm from './DeviationsBrowseFormContainer';
import DeviationsBrowseList from './DeviationsBrowseListContainer';
import Config from '../../config/config';

export default function DeviationsBrowse({
  config,
}) {
  return (
    <div>
      <DeviationsBrowseForm config={config} />
      <DeviationsBrowseList config={config} />
    </div>
  );
}

DeviationsBrowse.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
};
