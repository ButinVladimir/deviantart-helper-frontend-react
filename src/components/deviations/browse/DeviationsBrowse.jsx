import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DeviationsBrowseForm from './DeviationsBrowseFormContainer';
import DeviationsBrowseList from './DeviationsBrowseListContainer';
import DeviationsBrowsePagination from './DeviationsBrowsePaginationContainer';
import Config from '../../../config/config';

export default function DeviationsBrowse({
  config,
}) {
  return (
    <Fragment>
      <DeviationsBrowseForm config={config} />
      <DeviationsBrowseList config={config} />
      <DeviationsBrowsePagination config={config} />
    </Fragment>
  );
}

DeviationsBrowse.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
};
