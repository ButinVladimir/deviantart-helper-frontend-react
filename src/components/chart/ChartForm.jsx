import React from 'react';
import PropTypes from 'prop-types';
import {
  Field,
  Label as FormLabel,
  Control,
  Select,
  Checkbox,
} from 'react-bulma-components/lib/components/form';
import Columns from 'react-bulma-components/lib/components/columns';
import * as roundPeriods from '../../consts/round-periods';

export default function ChartForm({
  dataSetTitlesMap,
  dataSet,
  roundPeriod,
  showTime,
  dataSetChangeHandler,
  roundPeriodChangeHandler,
  showTimeChangeHandler,
}) {
  const dataSetOptions = Array.from(dataSetTitlesMap.entries()).map(dataSetOption => (
    <option key={dataSetOption[0]} value={dataSetOption[0]}>
      {dataSetOption[1]}
    </option>
  ));

  const roundPeriodOptions = [
    [roundPeriods.ROUND_PERIOD_NO_ROUND, 'No rounding'],
    [roundPeriods.ROUND_PERIOD_1_HOUR, '1 hour'],
    [roundPeriods.ROUND_PERIOD_4_HOURS, '4 hours'],
    [roundPeriods.ROUND_PERIOD_12_HOURS, '12 hours'],
    [roundPeriods.ROUND_PERIOD_1_DAY, '1 day'],
  ].map(roundPeriodOption => (
    <option key={roundPeriodOption[0]} value={roundPeriodOption[0]}>
      {roundPeriodOption[1]}
    </option>
  ));

  return (
    <Columns>
      <Columns.Column>
        <Field>
          <FormLabel>Data set</FormLabel>
          <Control>
            <Select name="data-set" value={dataSet} onChange={dataSetChangeHandler}>
              {dataSetOptions}
            </Select>
          </Control>
        </Field>
      </Columns.Column>

      <Columns.Column>
        <Field>
          <FormLabel>Round period</FormLabel>
          <Control>
            <Select name="round-period" value={roundPeriod} onChange={roundPeriodChangeHandler}>
              {roundPeriodOptions}
            </Select>
          </Control>
        </Field>
      </Columns.Column>

      <Columns.Column>
        <Field>
          <FormLabel>Show time</FormLabel>
          <Control>
            <Checkbox name="round-period" checked={showTime} onChange={showTimeChangeHandler} />
          </Control>
        </Field>
      </Columns.Column>
    </Columns>
  );
}

ChartForm.propTypes = {
  dataSetTitlesMap: PropTypes.instanceOf(Map).isRequired,
  dataSet: PropTypes.string.isRequired,
  roundPeriod: PropTypes.number.isRequired,
  showTime: PropTypes.bool.isRequired,
  dataSetChangeHandler: PropTypes.func.isRequired,
  roundPeriodChangeHandler: PropTypes.func.isRequired,
  showTimeChangeHandler: PropTypes.func.isRequired,
};
