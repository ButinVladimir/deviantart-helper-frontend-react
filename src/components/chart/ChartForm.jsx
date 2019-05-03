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
import convertOptions from '../../helpers/convert-options';
import { roundPeriodOptions } from '../../consts/round-periods';

export default function ChartForm({
  dataSetTitlesMap,
  dataSet,
  roundPeriod,
  showTime,
  dataSetChangeHandler,
  roundPeriodChangeHandler,
  showTimeChangeHandler,
}) {
  const dataSetOptionsElements = convertOptions(Array.from(dataSetTitlesMap.entries()));
  const roundPeriodOptionsElements = convertOptions(roundPeriodOptions);

  return (
    <Columns>
      <Columns.Column>
        <Field>
          <FormLabel>Data set</FormLabel>
          <Control>
            <Select name="data-set" value={dataSet} onChange={dataSetChangeHandler}>
              {dataSetOptionsElements}
            </Select>
          </Control>
        </Field>
      </Columns.Column>

      <Columns.Column>
        <Field>
          <FormLabel>Round period</FormLabel>
          <Control>
            <Select name="round-period" value={roundPeriod} onChange={roundPeriodChangeHandler}>
              {roundPeriodOptionsElements}
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
