import React from 'react';
import DeviationsStatisticsForm from './DeviationsStatisticsFormContainer';
import DeviationsStatisticsData from './DeviationsStatisticsDataContainer';

export default function DeviationsBrowse() {
  return (
    <div>
      <DeviationsStatisticsForm />
      <DeviationsStatisticsData />
    </div>
  );
}
