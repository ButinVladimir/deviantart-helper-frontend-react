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

import DeviationsChart from '../DeviationsChart';

export default function DeviationsDetailsMetadata({
  id,
  title,
  timestampBegin,
  timestampEnd,
  metadata,
  chartType,
  chartTypeChangeHandler,
  timestampBeginChangeHandler,
  timestampEndChangeHandler,
  submitHandler,
}) {
  const titles = new Map();
  titles.set(id, title);
  const mappedMetadata = metadata.map(md => Object.assign({}, md, { deviationId: id }));

  const timestampBeginDate = timestampBegin ? new Date(timestampBegin) : null;
  const timestampEndDate = timestampEnd ? new Date(timestampEnd) : null;

  return (
    <>
      <Section>
        <Container>
          <Field>
            <Label>Timestamp range beginning</Label>
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

          <Field>
            <Label>Timestamp range end</Label>
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

          <Field kind="group">
            <Control>
              <Button color="primary" onClick={submitHandler}>Submit</Button>
            </Control>
          </Field>
        </Container>
      </Section>

      <Section>
        <Container>

          <DeviationsChart
            metadata={mappedMetadata}
            titles={titles}
            chartType={chartType}
            chartTypeChangeHandler={chartTypeChangeHandler}
          />
        </Container>
      </Section>
    </>
  );
}

DeviationsDetailsMetadata.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timestampBegin: PropTypes.string.isRequired,
  timestampEnd: PropTypes.string.isRequired,
  metadata: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    favourites: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  })).isRequired,
  chartType: PropTypes.string.isRequired,
  chartTypeChangeHandler: PropTypes.func.isRequired,
  timestampBeginChangeHandler: PropTypes.func.isRequired,
  timestampEndChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
