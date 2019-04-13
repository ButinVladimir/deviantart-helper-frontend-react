import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Label,
} from 'recharts';

export default function DeviationsDetailsMetadata({
  metadata,
}) {
  return (
    <div>
      <LineChart
        width={800}
        height={300}
        data={metadata}
        syncId="details"
        margin={{
          top: 0,
          right: 0,
          left: 10,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp">
          <Label value="Time" offset={-15} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="views" stroke="#aaaa00" />
        <Line type="monotone" dataKey="favourites" stroke="#aa00aa" />
        <Line type="monotone" dataKey="comments" stroke="#00aaaa" />
        <Line type="monotone" dataKey="downloads" stroke="#a0a0aa" />
      </LineChart>
    </div>
  );
}

DeviationsDetailsMetadata.propTypes = {
  metadata: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    favourites: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  })).isRequired,
};
