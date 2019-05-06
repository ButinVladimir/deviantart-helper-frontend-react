import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import DeviationsBrowseForm from './DeviationsBrowseFormContainer';
import DeviationsBrowseList from './DeviationsBrowseListContainer';
import DeviationsBrowsePagination from './DeviationsBrowsePaginationContainer';

export default class DeviationsBrowse extends Component {
  componentDidMount() {
    const { clearDataHander } = this.props;
    clearDataHander();
  }

  render() {
    return (
      <Fragment>
        <DeviationsBrowseForm />
        <DeviationsBrowseList />
        <DeviationsBrowsePagination />
      </Fragment>
    );
  }
}

DeviationsBrowse.propTypes = {
  clearDataHander: PropTypes.func.isRequired,
};
