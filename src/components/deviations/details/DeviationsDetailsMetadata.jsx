import React from 'react';
import PropTypes from 'prop-types';
import DeviationsChart from '../DeviationsChart';

export default function DeviationsDetailsMetadata({
  id,
  title,
  metadata,
  chartType,
  chartTypeChangeHandler,
}) {
  const titles = new Map();
  titles.set(id, title);
  const mappedMetadata = metadata.map(md => Object.assign({}, md, { deviationId: id }));

  return (
    <DeviationsChart
      metadata={mappedMetadata}
      titles={titles}
      chartType={chartType}
      chartTypeChangeHandler={chartTypeChangeHandler}
    />
  );
}

DeviationsDetailsMetadata.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    favourites: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  })).isRequired,
  chartType: PropTypes.string.isRequired,
  chartTypeChangeHandler: PropTypes.func.isRequired,
};
