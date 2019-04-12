import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeviationsPreview from './DeviationsPreview';
import Config from '../../config/config';

export default class DeviationsBrowseList extends Component {
  componentDidMount() {
    const { preloadDeviationsHandler } = this.props;
    preloadDeviationsHandler();
  }

  render() {
    const { deviations } = this.props;
    const mappedDeviations = deviations.map(d => (
      <DeviationsPreview key={d.id} {...d} />
    ));

    return (
      <ul>
        {mappedDeviations}
      </ul>
    );
  }
}

DeviationsBrowseList.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
  deviations: PropTypes.arrayOf(PropTypes.any).isRequired,
  preloadDeviationsHandler: PropTypes.func.isRequired,
};
