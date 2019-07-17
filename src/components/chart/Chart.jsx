import React from 'react';
import PropTypes from 'prop-types';
import Level from 'react-bulma-components/lib/components/level';
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
import ChartForm from './ChartForm';
import {
  convertMetadata,
  calculateDifferences,
  makeDiffMap,
  dateFormatter,
  dateTimeFormatter,
  tooltipFormatter,
  legendFormatter,
} from './chart-helper';
import colors from '../../consts/colors';

export default function Chart({
  dataSetTitlesMap,
  metadata,
  titlesMap,
  dataSet,
  roundPeriod,
  showTime,
  showDifferences,
  dataSetChangeHandler,
  roundPeriodChangeHandler,
  showTimeChangeHandler,
  showDifferencesChangeHandler,
}) {
  let convertedMetadata = convertMetadata(metadata, dataSet, roundPeriod);
  if (showDifferences) {
    convertedMetadata = calculateDifferences(convertedMetadata);
  }
  const differencesMap = makeDiffMap(convertedMetadata);

  const content = Array.from(titlesMap.keys()).map((key, index) => (
    <Line
      key={key}
      connectNulls
      type="monotone"
      dataKey={key}
      stroke={colors[index % colors.length]}
      strokeWidth={2}
    />
  ));

  return (
    <>
      <ChartForm
        dataSetTitlesMap={dataSetTitlesMap}
        dataSet={dataSet}
        roundPeriod={roundPeriod}
        showTime={showTime}
        showDifferences={showDifferences}
        dataSetChangeHandler={dataSetChangeHandler}
        roundPeriodChangeHandler={roundPeriodChangeHandler}
        showTimeChangeHandler={showTimeChangeHandler}
        showDifferencesChangeHandler={showDifferencesChangeHandler}
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
                formatter={tooltipFormatter(titlesMap, differencesMap)}
                labelFormatter={showTime ? dateTimeFormatter : dateFormatter}
              />
              <Legend formatter={legendFormatter(titlesMap)} />
              {content}
            </LineChart>
          </ResponsiveContainer>
        </Level.Item>
      </Level>
    </>
  );
}

Chart.propTypes = {
  dataSetTitlesMap: PropTypes.instanceOf(Map).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  metadata: PropTypes.object.isRequired,
  titlesMap: PropTypes.instanceOf(Map).isRequired,
  dataSet: PropTypes.number.isRequired,
  roundPeriod: PropTypes.number.isRequired,
  showTime: PropTypes.bool.isRequired,
  showDifferences: PropTypes.bool.isRequired,
  dataSetChangeHandler: PropTypes.func.isRequired,
  roundPeriodChangeHandler: PropTypes.func.isRequired,
  showTimeChangeHandler: PropTypes.func.isRequired,
  showDifferencesChangeHandler: PropTypes.func.isRequired,
};
