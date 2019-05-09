import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import {
  Field,
  Label,
  Control,
} from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';
import { datetimePickerProps } from '../../../helpers/datepicker-props';

export default function DeviationsTotalForm({
  timestampBegin,
  timestampEnd,
  totalLoading,
  timestampBeginChangeHandler,
  timestampEndChangeHandler,
  submitHandler,
}) {
  const timestampBeginDate = timestampBegin ? new Date(timestampBegin) : null;
  const timestampEndDate = timestampEnd ? new Date(timestampEnd) : null;

  return (
    <Section>
      <Container>
        <Content>
          <Heading size={2}>Deviation total statistics</Heading>
        </Content>
        <Field horizontal>
          <Field.Label>
            <Label>Timestamp range beginning</Label>
          </Field.Label>
          <Field.Body>
            <Field>
              <Control>
                <DatePicker
                  {...datetimePickerProps}
                  disabled={totalLoading}
                  selectsStart
                  name="publishedTimeBegin"
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
                  disabled={totalLoading}
                  selectsEnd
                  name="publishedTimeBegin"
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
                <Button color="primary" onClick={submitHandler} loading={totalLoading}>Submit</Button>
              </Control>
            </Field>
          </Field.Body>
        </Field>
      </Container>
    </Section>
  );
}

DeviationsTotalForm.propTypes = {
  timestampBegin: PropTypes.number,
  timestampEnd: PropTypes.number,
  totalLoading: PropTypes.bool.isRequired,
  timestampBeginChangeHandler: PropTypes.func.isRequired,
  timestampEndChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

DeviationsTotalForm.defaultProps = {
  timestampBegin: null,
  timestampEnd: null,
};
