import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Label,
  Legend,
} from 'recharts';
import Level from 'react-bulma-components/lib/components/level';
import ChartForm from './ChartForm';
import colors from '../../consts/colors';

/**
 * @description
 * Formatter for chart.
 * Converts timestamp to a proper date string.
 *
 * @param {number} timestamp - The timestamp.
 * @returns {string} Converted date.
 */
export const dateFormatter = timestamp => new Date(timestamp).toLocaleDateString();

/**
 * @description
 * Formatter for chart.
 * Converts timestamp to a proper datetime string.
 *
 * @param {number} timestamp - The timestamp.
 * @returns {string} Converted datetime.
 */
export const dateTimeFormatter = timestamp => new Date(timestamp).toLocaleString();

/**
 * @description
 * Makes legend formatter for chart.
 * Converts deviation ID in legend to a title.
 *
 * @param {Map<string, string>} titlesMap - Map of ID to titles.
 * @returns {Function} Formatter.
 */
export const legendFormatter = titlesMap => (value, entry) => (
  <span style={{ color: entry.color }}>
    {titlesMap.get(value)}
  </span>
);

/**
 * @description
 * Makes tooltip formatter for chart.
 * Converts deviation ID in legend to a title.
 *
 * @param {Map<string, string>} titlesMap - Map of ID to titles.
 * @param {Map<string, string>} diffMap - Map of timestamps to maps of ID to differences.
 * @returns {Function} Formatter.
 */
export const tooltipFormatter = (titlesMap, diffMap) => (
  value,
  name,
  { payload: { timestamp } },
) => [
  `${value}${diffMap.get(timestamp).get(name)}`, titlesMap.get(name),
];


/**
 * @description
 * Rounds up the timestamp.
 *
 * @param {number} timestamp - The timestamp.
 * @param {number} roundPeriod - The round period.
 * @returns {number} Rounded timestamp.
 */
export const roundTimestamp = (timestamp, roundPeriod) => Math.floor(
  1 + timestamp / roundPeriod,
) * roundPeriod - 1;

/**
 * @description
 * Recharts doesn't merge data cells with same timestamp by itself.
 * It had to be done manually, so timestamps are splitted
 * into different buckets by selected period.
 * For each bucket, data with latest timestamp is selected.
 *
 * @param {Object} metadata - The metadata.
 * Has format of object map of deviation id to array of metadata.
 * @param {string} dataSet - Selected data set.
 * @param {number} roundPeriod - Selected round period.
 * @param {Map<number, Map<string, string>>} diffMap - The difference map.
 * Has format of timestamp to map of deviation id to diff string.
 * @returns {Object[]} Parsed metadata.
 */
export const convertMetadata = (metadata, dataSet, roundPeriod, diffMap) => {
  // Map of timestamps to objects with values.
  const flattenedMetadataMap = new Map();

  Object.entries(metadata).forEach((deviationMetadata) => {
    deviationMetadata[1].forEach((md) => {
      const timestamp = roundTimestamp(md.timestamp, roundPeriod);
      let bucketValues;

      if (!flattenedMetadataMap.has(timestamp)) {
        bucketValues = {};
        flattenedMetadataMap.set(timestamp, bucketValues);
      } else {
        bucketValues = flattenedMetadataMap.get(timestamp);
      }

      bucketValues[deviationMetadata[0]] = md[dataSet];
    });
  });

  // Map of deviation ids to values.
  const previousValuesMap = new Map();
  return Array
    .from(flattenedMetadataMap.entries())
    .map((flattenedMetadataEntry) => {
      // Map of deviation ids to diff strings.
      const diffs = new Map();
      diffMap.set(flattenedMetadataEntry[0], diffs);

      Object.entries(flattenedMetadataEntry[1]).forEach((entry) => {
        if (!previousValuesMap.has(entry[0])) {
          diffs.set(entry[0], '');
        } else {
          const diff = entry[1] - previousValuesMap.get(entry[0]);

          if (diff > 0) {
            diffs.set(entry[0], ` (+${diff})`);
          } else {
            diffs.set(entry[0], ` (${diff})`);
          }
        }

        previousValuesMap.set(entry[0], entry[1]);
      });

      return {
        timestamp: flattenedMetadataEntry[0],
        ...flattenedMetadataEntry[1],
      };
    });
};

export default function DeviationsChart({
  dataSetTitlesMap,
  metadata,
  titlesMap,
  dataSet,
  roundPeriod,
  showTime,
  dataSetChangeHandler,
  roundPeriodChangeHandler,
  showTimeChangeHandler,
}) {
  const diffMap = new Map();
  const convertedMetadata = convertMetadata(metadata, dataSet, roundPeriod, diffMap);

  const lines = Array.from(titlesMap.keys()).map((key, index) => (
    <Line
      key={key}
      connectNulls
      type="monotone"
      dataKey={key}
      stroke={colors[index % colors.length]}
    />
  ));

  return (
    <>
      <ChartForm
        dataSetTitlesMap={dataSetTitlesMap}
        dataSet={dataSet}
        roundPeriod={roundPeriod}
        showTime={showTime}
        dataSetChangeHandler={dataSetChangeHandler}
        roundPeriodChangeHandler={roundPeriodChangeHandler}
        showTimeChangeHandler={showTimeChangeHandler}
      />
      <Level>
        <Level.Item>
          <ResponsiveContainer width="100%" height={550}>
            <LineChart
              data={convertedMetadata}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                type="number"
                domain={['dataMin', 'dataMax']}
                tickFormatter={showTime ? dateTimeFormatter : dateFormatter}
              />
              <YAxis
                allowDecimals={false}
                type="number"
                domain={['dataMin', 'dataMax']}
              >
                <Label value={dataSetTitlesMap[dataSet]} angle={-90} offset={5} position="insideLeft" />
              </YAxis>
              <Tooltip
                formatter={tooltipFormatter(titlesMap, diffMap)}
                labelFormatter={showTime ? dateTimeFormatter : dateFormatter}
              />
              <Legend formatter={legendFormatter(titlesMap)} />
              {lines}
            </LineChart>
          </ResponsiveContainer>
        </Level.Item>
      </Level>
    </>
  );
}

DeviationsChart.propTypes = {
  dataSetTitlesMap: PropTypes.instanceOf(Map).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  metadata: PropTypes.object.isRequired,
  titlesMap: PropTypes.instanceOf(Map).isRequired,
  dataSet: PropTypes.string.isRequired,
  roundPeriod: PropTypes.number.isRequired,
  showTime: PropTypes.bool.isRequired,
  dataSetChangeHandler: PropTypes.func.isRequired,
  roundPeriodChangeHandler: PropTypes.func.isRequired,
  showTimeChangeHandler: PropTypes.func.isRequired,
};
