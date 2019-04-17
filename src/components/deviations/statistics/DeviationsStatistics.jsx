import React from 'react';
import PropTypes from 'prop-types';
import DeviationsStatisticsForm from './DeviationsStatisticsFormContainer';
import DeviationsStatisticsData from './DeviationsStatisticsDataContainer';
import Config from '../../../config/config';

export default function DeviationsBrowse({
  config,
}) {
  return (
    <div>
      <DeviationsStatisticsForm config={config} />
      <DeviationsStatisticsData config={config} />
    </div>
  );
}

DeviationsBrowse.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
};
