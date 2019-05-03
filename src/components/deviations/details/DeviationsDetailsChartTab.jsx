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

export default function DeviationsDetailsChartTab({
  id,
  title,
  timestampBegin,
  timestampEnd,
  metadata,
  timestampBeginChangeHandler,
  timestampEndChangeHandler,
  submitHandler,
}) {
  const titlesMap = new Map();
  titlesMap.set(id, title);
  const mappedMetadata = metadata.map(md => Object.assign({}, md, { deviationId: id }));

  const timestampBeginDate = timestampBegin ? new Date(timestampBegin) : null;
  const timestampEndDate = timestampEnd ? new Date(timestampEnd) : null;

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
                    isClearable
                    className="input"
                    autoComplete="off"
                    withPortal
                    showYearDropdown
                    showMonthDropdown
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm"
                    timeFormat="HH:mm"
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
                    isClearable
                    className="input"
                    autoComplete="off"
                    withPortal
                    showYearDropdown
                    showMonthDropdown
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm"
                    timeFormat="HH:mm"
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
                  <Button color="primary" onClick={submitHandler}>Submit</Button>
                </Control>
              </Field>
            </Field.Body>
          </Field>
        </Container>
      </Section>

      <Section>
        <Container>
          <Chart
            metadata={mappedMetadata}
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
  metadata: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    favourites: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  })).isRequired,
  timestampBeginChangeHandler: PropTypes.func.isRequired,
  timestampEndChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

DeviationsDetailsChartTab.defaultProps = {
  timestampBegin: null,
  timestampEnd: null,
};
