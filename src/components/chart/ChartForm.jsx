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
  showDifferences,
  dataSetChangeHandler,
  roundPeriodChangeHandler,
  showTimeChangeHandler,
  showDifferencesChangeHandler,
}) {
  const dataSetOptionsElements = convertOptions(Array.from(dataSetTitlesMap.entries()));
  const roundPeriodOptionsElements = convertOptions(roundPeriodOptions);

  return (
    <Columns>
      <Columns.Column>
        <Field>
          <FormLabel>Data set</FormLabel>
          <Control>
            <Select
              id="data-set"
              name="data-set"
              value={dataSet}
              onChange={dataSetChangeHandler}
            >
              {dataSetOptionsElements}
            </Select>
          </Control>
        </Field>
      </Columns.Column>

      <Columns.Column>
        <Field>
          <FormLabel>Round period</FormLabel>
          <Control>
            <Select
              id="round-period"
              name="round-period"
              value={roundPeriod}
              onChange={roundPeriodChangeHandler}
            >
              {roundPeriodOptionsElements}
            </Select>
          </Control>
        </Field>
      </Columns.Column>

      <Columns.Column>
        <Field>
          <FormLabel>Show time</FormLabel>
          <Control>
            <Checkbox
              id="show-time"
              name="show-time"
              checked={showTime}
              onChange={showTimeChangeHandler}
            />
          </Control>
        </Field>
      </Columns.Column>

      <Columns.Column narrow>
        <Field>
          <FormLabel>Show differences</FormLabel>
          <Control>
            <Checkbox
              id="show-differences"
              name="show-differences"
              checked={showDifferences}
              onChange={showDifferencesChangeHandler}
            />
          </Control>
        </Field>
      </Columns.Column>
    </Columns>
  );
}

ChartForm.propTypes = {
  dataSetTitlesMap: PropTypes.instanceOf(Map).isRequired,
  dataSet: PropTypes.number.isRequired,
  roundPeriod: PropTypes.number.isRequired,
  showTime: PropTypes.bool.isRequired,
  showDifferences: PropTypes.bool.isRequired,
  dataSetChangeHandler: PropTypes.func.isRequired,
  roundPeriodChangeHandler: PropTypes.func.isRequired,
  showTimeChangeHandler: PropTypes.func.isRequired,
  showDifferencesChangeHandler: PropTypes.func.isRequired,
};
