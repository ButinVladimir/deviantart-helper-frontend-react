import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeviationsTotalForm from './DeviationsTotalFormContainer';
import DeviationsTotalValues from './DeviationsTotalValuesContainer';
import CustomLoader from '../../shared/CustomLoader';

export default class DeviationsTotal extends Component {
  componentDidMount() {
    const { clearDataHandler, preloadStatisticsHandler } = this.props;

    clearDataHandler();
    preloadStatisticsHandler();
  }

  render() {
    const { totalLoading } = this.props;

    return (
      <>
        <DeviationsTotalForm />

        {totalLoading && <CustomLoader />}

        {!totalLoading && <DeviationsTotalValues />}
      </>
    );
  }
}

DeviationsTotal.propTypes = {
  totalLoading: PropTypes.bool.isRequired,
  clearDataHandler: PropTypes.func.isRequired,
  preloadStatisticsHandler: PropTypes.func.isRequired,
};
