import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import {
  Field,
  Label,
  Control,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import Chart from '../shared/DeviationsChartContainer';
import { datetimePickerProps } from '../../../helpers/datepicker-props';

export default function DeviationsDetailsChartTab({
  id,
  title,
  timestampBegin,
  timestampEnd,
  metadata,
  metadataLoading,
  timestampBeginChangeHandler,
  timestampEndChangeHandler,
  submitHandler,
}) {
  const titlesMap = new Map();
  titlesMap.set(id, title);

  const timestampBeginDate = timestampBegin !== null ? new Date(timestampBegin) : null;
  const timestampEndDate = timestampEnd != null ? new Date(timestampEnd) : null;

  return (
    <>
      <Section>
        <Container>
          <Field horizontal>
            <Field.Label>
              <Label>Timestamp range beginning</Label>
            </Field.Label>
            <Field.Body>
              <Field>
                <Control>
                  <DatePicker
                    {...datetimePickerProps}
                    id="timestamp-begin"
                    disabled={metadataLoading}
                    selectsStart
                    name="timestampBegin"
                    startDate={timestampBeginDate}
                    endDate={timestampEndDate}
                    selected={timestampBeginDate}
                    onChange={timestampBeginChangeHandler}
                  />
                </Control>
              </Field>
            </Field.Body>
          </Field>

          <Field horizontal>
            <Field.Label size="normal">
              <Label>Timestamp range end</Label>
            </Field.Label>
            <Field.Body>
              <Field>
                <Control>
                  <DatePicker
                    {...datetimePickerProps}
                    id="timestamp-end"
                    disabled={metadataLoading}
                    selectsEnd
                    name="timestampEnd"
                    startDate={timestampBeginDate}
                    endDate={timestampEndDate}
                    selected={timestampEndDate}
                    onChange={timestampEndChangeHandler}
                  />
                </Control>
              </Field>
            </Field.Body>
          </Field>

          <Field kind="group">
            <Field.Label size="normal" />
            <Field.Body>
              <Field>
                <Control>
                  <Button id="submit-button" color="primary" onClick={submitHandler} loading={metadataLoading}>Submit</Button>
                </Control>
              </Field>
            </Field.Body>
          </Field>
        </Container>
      </Section>

      <Section>
        <Container>
          <Chart
            metadata={metadata || {}}
            titlesMap={titlesMap}
          />
        </Container>
      </Section>
    </>
  );
}

DeviationsDetailsChartTab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timestampBegin: PropTypes.number,
  timestampEnd: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  metadata: PropTypes.object,
  metadataLoading: PropTypes.bool.isRequired,
  timestampBeginChangeHandler: PropTypes.func.isRequired,
  timestampEndChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

DeviationsDetailsChartTab.defaultProps = {
  timestampBegin: null,
  timestampEnd: null,
  metadata: null,
};
