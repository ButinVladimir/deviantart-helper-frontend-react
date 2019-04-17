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
  Legend,
} from 'recharts';
import * as chartTypes from '../../consts/chart-types';

/**
 * @description
 * Gets titles for the chart type.
 *
 * @param {string} chartType - The chart type.
 * @returns {string} Cart title.
 */
const getChartTitle = (chartType) => {
  switch (chartType) {
    case chartTypes.CHART_VIEWS:
      return 'Views';

    case chartTypes.CHART_FAVOURITES:
      return 'Favourites';

    case chartTypes.CHART_COMMENTS:
      return 'Comments';

    case chartTypes.CHART_DOWNLOADS:
      return 'Downloads';

    default: return '';
  }
};

/**
 * @description
 * Tick formatter for chart.
 * Converts timestamp to a proper date string.
 *
 * @param {number} timestamp - The metadata timestamp.
 * @returns {string} Converted date.
 */
export const tickFormatter = timestamp => new Date(timestamp).toLocaleDateString();

/**
 * @description
 * Makes legend formatter for chart.
 * Converts deviation ID in legend to a title.
 *
 * @param {Map<string, string>} titles - Map of ID to titles.
 * @returns {Function} Formatter.
 */
export const legendFormatter = titles => (value, entry) => (
  <span style={{ color: entry.color }}>
    {titles.get(value)}
  </span>
);

/**
 * @description
 * Makes tooltip formatter for chart.
 * Converts deviation ID in legend to a title.
 *
 * @param {Map<string, string>} titles - Map of ID to titles.
 * @returns {Function} Formatter.
 */
export const tooltipFormatter = titles => (value, name) => [
  value, titles.get(name),
];

const millisecondsInDay = 24 * 60 * 60 * 1000;

/**
 * @description
 * Label formatter for chart.
 * Converts timestamp to a proper date string.
 *
 * @param {number} timestamp - The metadata timestamp.
 * @returns {string} Converted date.
 */
export const tooltipLabelFormatter = timestamp => new Date(timestamp).toLocaleDateString();

/**
 * @description
 * Rounds up the timestamp.
 *
 * @param {number} timestamp - The timestamp.
 * @returns {number} Rounded timestamp.
 */
export const roundTimestamp = timestamp => Math.floor(
  timestamp / millisecondsInDay,
) * millisecondsInDay;

export default function DeviationsChart({
  metadata,
  titles,
  chartType,
  chartTypeChangeHandler,
}) {
  const chartOptions = [
    chartTypes.CHART_VIEWS,
    chartTypes.CHART_FAVOURITES,
    chartTypes.CHART_COMMENTS,
    chartTypes.CHART_DOWNLOADS,
  ].map(ct => (
    <option key={ct} value={ct}>
      {getChartTitle(ct)}
    </option>
  ));

  /**
   * Recharts doesn't merge data cells with same timestamp by itself.
   * It had to be done manually.
   */
  const flattenedMetadataMap = new Map();
  metadata.forEach((md) => {
    const timestamp = roundTimestamp(md.timestamp);
    let entry;

    if (!flattenedMetadataMap.has(timestamp)) {
      entry = {};
      flattenedMetadataMap.set(timestamp, entry);
    } else {
      entry = flattenedMetadataMap.get(timestamp);
    }

    entry[md.deviationId] = md[chartType];
  });
  const convertedMetadata = Array.from(flattenedMetadataMap.entries()).map(e => ({
    timestamp: e[0],
    ...e[1],
  }));

  const lines = Array.from(titles.keys()).map(k => (
    <Line
      key={k}
      connectNulls
      type="monotone"
      dataKey={k}
    />
  ));

  return (
    <div>
      <div>
        <select name="chart-type" value={chartType} onChange={chartTypeChangeHandler}>
          {chartOptions}
        </select>
      </div>
      <div>
        <LineChart
          width={800}
          height={500}
          data={convertedMetadata}
          margin={{
            top: 0,
            right: 0,
            left: 10,
            bottom: 200,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            type="number"
            domain={['dataMin', 'dataMax']}
            tickFormatter={tickFormatter}
          />
          <YAxis
            allowDecimals={false}
            type="number"
            domain={['dataMin', 'dataMax']}
          >
            <Label value={getChartTitle(chartType)} angle={-90} offset={5} position="insideLeft" />
          </YAxis>
          <Tooltip formatter={tooltipFormatter(titles)} labelFormatter={tooltipLabelFormatter} />
          <Legend formatter={legendFormatter(titles)} />
          {lines}
        </LineChart>
      </div>
    </div>
  );
}

DeviationsChart.propTypes = {
  metadata: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    favourites: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  })).isRequired,
  titles: PropTypes.instanceOf(Map).isRequired,
  chartType: PropTypes.string.isRequired,
  chartTypeChangeHandler: PropTypes.func.isRequired,
};
