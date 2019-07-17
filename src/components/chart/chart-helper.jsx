import React from 'react';
import { DATA_SET_TIMESTAMP } from '../../consts/data-sets';

const timezoneOffset = -(new Date().getTimezoneOffset()) * 60 * 1000;

/**
 * @description
 * Formatter for chart.
 * Converts timestamp to a proper date string.
 *
 * @param {number} timestamp - The timestamp in the local zone.
 * @returns {string} Converted date.
 */
export const dateFormatter = timestamp => new Date(timestamp).toLocaleDateString();

/**
 * @description
 * Formatter for chart.
 * Converts timestamp to a proper datetime string.
 *
 * @param {number} timestamp - The timestamp in the local zone.
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
 * Calculates rounded timestamp in local time.
 *
 * @param {number} timestamp - The timestamp.
 * @param {number} roundPeriod - The round period.
 * @returns {number} Rounded timestamp.
 */
export const roundTimestamp = (timestamp, roundPeriod) => Math.floor(
  1 + (timestamp + timezoneOffset) / roundPeriod,
) * roundPeriod - timezoneOffset - 1;

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
 * @returns {Object[]} Parsed metadata.
 */
export const convertMetadata = (metadata, dataSet, roundPeriod) => {
  // Map of timestamps to objects with values.
  const flattenedMetadataMap = new Map();

  Object.entries(metadata).forEach((deviationMetadata) => {
    deviationMetadata[1].forEach((md) => {
      const timestamp = roundTimestamp(md[DATA_SET_TIMESTAMP], roundPeriod);
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

  return Array
    .from(flattenedMetadataMap.entries())
    .map(flattenedMetadataEntry => ({
      timestamp: flattenedMetadataEntry[0],
      ...flattenedMetadataEntry[1],
    }));
};

/**
 * @description
 * Converts array of metadata into array of differences
 * for each timestamp and deviation.
 *
 * @param {Object[]} convertedMetadata - Parsed metadata.
 * @returns {Object[]} Array with differences. Has same format as metadata.
 */
export const calculateDifferences = (convertedMetadata) => {
  // Map of deviation ids to their previous values.
  const previousValuesMap = new Map();

  return convertedMetadata
    .map((md) => {
      const result = { timestamp: md.timestamp };

      Object.entries(md).forEach((entry) => {
        if (entry[0] === 'timestamp') {
          return;
        }

        if (previousValuesMap.has(entry[0])) {
          result[entry[0]] = entry[1] - previousValuesMap.get(entry[0]);
        }

        previousValuesMap.set(entry[0], entry[1]);
      });

      return result;
    })
    .filter(md => Object.entries(md).length > 1);
};

/**
 * @description
 * Makes difference map with differences for each timestamp and deviation.
 *
 * @param {Object[]} convertedMetadata - Parsed metadata.
 * @returns {Map<number, Map<string, string>>} The difference map.
 * Has format of timestamp to map of deviation id to diff string.
 */
export const makeDiffMap = (convertedMetadata) => {
  // The resulting map.
  const differencesMap = new Map();

  // Map of deviation ids to their previous values.
  const previousValuesMap = new Map();

  convertedMetadata.forEach((md) => {
    // Map of deviation ids to diff strings.
    const diffs = new Map();
    differencesMap.set(md.timestamp, diffs);

    Object.entries(md).forEach((entry) => {
      if (entry[0] === 'timestamp') {
        return;
      }

      if (!previousValuesMap.has(entry[0])) {
        diffs.set(entry[0], '');
      } else {
        const diff = entry[1] - previousValuesMap.get(entry[0]);
        diffs.set(
          entry[0],
          diff > 0 ? ` (+${diff})` : ` (${diff})`,
        );
      }

      previousValuesMap.set(entry[0], entry[1]);
    });
  });

  return differencesMap;
};
