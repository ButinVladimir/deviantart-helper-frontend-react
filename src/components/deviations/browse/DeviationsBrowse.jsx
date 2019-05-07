import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DeviationsBrowseForm from './DeviationsBrowseFormContainer';
import DeviationsBrowseList from './DeviationsBrowseListContainer';
import DeviationsBrowsePagination from './DeviationsBrowsePaginationContainer';
import CustomLoader from '../../shared/CustomLoader';

export default class DeviationsBrowse extends PureComponent {
  componentDidMount() {
    const { clearDataHandler, preloadDeviationsHandler } = this.props;

    clearDataHandler();
    preloadDeviationsHandler();
  }

  render() {
    const { pageLoading } = this.props;

    return (
      <>
        <DeviationsBrowseForm />

        {pageLoading && <CustomLoader />}

        {!pageLoading && <DeviationsBrowseList />}

        <DeviationsBrowsePagination />
      </>
    );
  }
}

DeviationsBrowse.propTypes = {
  pageLoading: PropTypes.bool.isRequired,
  clearDataHandler: PropTypes.func.isRequired,
  preloadDeviationsHandler: PropTypes.func.isRequired,
};
