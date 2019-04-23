import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Button from 'react-bulma-components/lib/components/button';
import {
  Field,
  Label,
  Control,
  Input,
  Select,
} from 'react-bulma-components/lib/components/form';
import * as sort from '../../../consts/sort';
import Config from '../../../config/config';

export default function DeviationsBrowseForm({
  // eslint-disable-next-line no-unused-vars
  config,
  page,
  sortField,
  sortOrder,
  title,
  publishedTimeBegin,
  publishedTimeEnd,
  prevPageHandler,
  nextPageHandler,
  sortFieldChangeHandler,
  sortOrderChangeHandler,
  titleChangeHandler,
  publishedTimeBeginChangeHandler,
  publishedTimeEndChangeHandler,
  submitHandler,
}) {
  const publishedTimeBeginDate = publishedTimeBegin ? new Date(publishedTimeBegin) : null;
  const publishedTimeEndDate = publishedTimeEnd ? new Date(publishedTimeEnd) : null;

  return (
    <Section>
      <Container>
        <Field>
          <Label>Title</Label>
          <Control>
            <Input name="title" value={title} onChange={titleChangeHandler} />
          </Control>
        </Field>

        <Field>
          <Label>Published time period beginning</Label>
          <Control>
            <DatePicker
              isClearable
              className="input"
              autoComplete="off"
              withPortal
              showYearDropdown
              showMonthDropdown
              selectsStart
              dateFormat="dd.MM.yyyy"
              name="publishedTimeBegin"
              startDate={publishedTimeBeginDate}
              endDate={publishedTimeEndDate}
              selected={publishedTimeBeginDate}
              onChange={publishedTimeBeginChangeHandler}
            />
          </Control>
        </Field>

        <Field>
          <Label>Published time period end</Label>
          <Control>
            <DatePicker
              isClearable
              className="input"
              autoComplete="off"
              withPortal
              showYearDropdown
              showMonthDropdown
              selectsEnd
              dateFormat="dd.MM.yyyy"
              name="publishedTimeEnd"
              startDate={publishedTimeBeginDate}
              endDate={publishedTimeEndDate}
              selected={publishedTimeEndDate}
              onChange={publishedTimeEndChangeHandler}
            />
          </Control>
        </Field>

        <Field>
          <Label>Sort by</Label>
          <Control>
            <Select name="sortField" value={sortField} onChange={sortFieldChangeHandler}>
              <option value={sort.FIELD_TITLE}>Title</option>
              <option value={sort.FIELD_PUBLISHED_TIME}>Published time</option>
              <option value={sort.FIELD_VIEWS}>View count</option>
              <option value={sort.FIELD_FAVOURITES}>Favourite count</option>
              <option value={sort.FIELD_COMMENTS}>Comment count</option>
              <option value={sort.FIELD_DOWNLOADS}>Download count</option>
            </Select>
          </Control>
        </Field>

        <Field>
          <Label>Sort order</Label>
          <Control>
            <Select name="sortOrder" value={sortOrder} onChange={sortOrderChangeHandler}>
              <option value={sort.ORDER_ASC}>Ascending</option>
              <option value={sort.ORDER_DESC}>Descending</option>
            </Select>
          </Control>
        </Field>

        <Field>
          <Control>
            <Button color="primary" onClick={submitHandler}>Submit</Button>
          </Control>
        </Field>

        <Field kind="group">
          <Control>
            <Button onClick={prevPageHandler}>Prev page</Button>
          </Control>
          <Control>
            <span>{` - ${page} - `}</span>
          </Control>
          <Control>
            <Button onClick={nextPageHandler}>Next page</Button>
          </Control>
        </Field>
      </Container>
    </Section>
  );
}

DeviationsBrowseForm.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
  page: PropTypes.number.isRequired,
  sortField: PropTypes.string.isRequired,
  sortOrder: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  publishedTimeBegin: PropTypes.number,
  publishedTimeEnd: PropTypes.number,
  prevPageHandler: PropTypes.func.isRequired,
  nextPageHandler: PropTypes.func.isRequired,
  sortFieldChangeHandler: PropTypes.func.isRequired,
  sortOrderChangeHandler: PropTypes.func.isRequired,
  titleChangeHandler: PropTypes.func.isRequired,
  publishedTimeBeginChangeHandler: PropTypes.func.isRequired,
  publishedTimeEndChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

DeviationsBrowseForm.defaultProps = {
  publishedTimeBegin: null,
  publishedTimeEnd: null,
};
