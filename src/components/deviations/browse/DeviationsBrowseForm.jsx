import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';
import Pagination from 'react-bulma-components/lib/components/pagination';
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
  pageCount,
  sortField,
  sortOrder,
  title,
  publishedTimeBegin,
  publishedTimeEnd,
  pageLoading,
  showPagination,
  sortFieldChangeHandler,
  sortOrderChangeHandler,
  titleChangeHandler,
  publishedTimeBeginChangeHandler,
  publishedTimeEndChangeHandler,
  submitHandler,
  loadPageHandler,
}) {
  const publishedTimeBeginDate = publishedTimeBegin ? new Date(publishedTimeBegin) : null;
  const publishedTimeEndDate = publishedTimeEnd ? new Date(publishedTimeEnd) : null;

  return (
    <Section>
      <Container>
        <Content>
          <Heading size={3}>Browse deviations</Heading>
        </Content>
        <Field>
          <Label>Title</Label>
          <Control>
            <Input
              disabled={pageLoading}
              name="title"
              value={title}
              onChange={titleChangeHandler}
            />
          </Control>
        </Field>

        <Columns>
          <Columns.Column>
            <Field>
              <Label>Published time range beginning</Label>
              <Control>
                <DatePicker
                  disabled={pageLoading}
                  isClearable
                  className="input"
                  autoComplete="off"
                  withPortal
                  showYearDropdown
                  showMonthDropdown
                  dateFormat="dd.MM.yyyy"
                  selectsStart
                  name="publishedTimeBegin"
                  startDate={publishedTimeBeginDate}
                  endDate={publishedTimeEndDate}
                  selected={publishedTimeBeginDate}
                  onChange={publishedTimeBeginChangeHandler}
                />
              </Control>
            </Field>
          </Columns.Column>

          <Columns.Column>
            <Field>
              <Label>Published time range end</Label>
              <Control>
                <DatePicker
                  disabled={pageLoading}
                  isClearable
                  className="input"
                  autoComplete="off"
                  withPortal
                  showYearDropdown
                  showMonthDropdown
                  dateFormat="dd.MM.yyyy"
                  selectsEnd
                  name="publishedTimeEnd"
                  startDate={publishedTimeBeginDate}
                  endDate={publishedTimeEndDate}
                  selected={publishedTimeEndDate}
                  onChange={publishedTimeEndChangeHandler}
                />
              </Control>
            </Field>
          </Columns.Column>

          <Columns.Column>
            <Field>
              <Label>Sort by</Label>
              <Control>
                <Select
                  disabled={pageLoading}
                  name="sortField"
                  value={sortField}
                  onChange={sortFieldChangeHandler}
                >
                  <option value={sort.FIELD_TITLE}>Title</option>
                  <option value={sort.FIELD_PUBLISHED_TIME}>Published time</option>
                  <option value={sort.FIELD_VIEWS}>Views count</option>
                  <option value={sort.FIELD_FAVOURITES}>Favourites count</option>
                  <option value={sort.FIELD_COMMENTS}>Comments count</option>
                  <option value={sort.FIELD_DOWNLOADS}>Downloads count</option>
                </Select>
              </Control>
            </Field>
          </Columns.Column>

          <Columns.Column narrow>
            <Field>
              <Label>Sort order</Label>
              <Control>
                <Select
                  disabled={pageLoading}
                  name="sortOrder"
                  value={sortOrder}
                  onChange={sortOrderChangeHandler}
                >
                  <option value={sort.ORDER_ASC}>Ascending</option>
                  <option value={sort.ORDER_DESC}>Descending</option>
                </Select>
              </Control>
            </Field>
          </Columns.Column>
        </Columns>

        {!showPagination && (
          <Field kind="group" align="right">
            <Control>
              <Button color="primary" onClick={submitHandler} loading={pageLoading}>Submit</Button>
            </Control>
          </Field>
        )}
        {showPagination && (
          <Pagination
            // Pagination in Bulma starts from 1 while pagination on backend start from 0.
            current={page + 1}
            total={pageCount}
            delta={3}
            onChange={loadPageHandler}
          />
        )}

      </Container>
    </Section>
  );
}

DeviationsBrowseForm.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  sortField: PropTypes.string.isRequired,
  sortOrder: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  publishedTimeBegin: PropTypes.number,
  publishedTimeEnd: PropTypes.number,
  pageLoading: PropTypes.bool.isRequired,
  showPagination: PropTypes.bool.isRequired,
  sortFieldChangeHandler: PropTypes.func.isRequired,
  sortOrderChangeHandler: PropTypes.func.isRequired,
  titleChangeHandler: PropTypes.func.isRequired,
  publishedTimeBeginChangeHandler: PropTypes.func.isRequired,
  publishedTimeEndChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  loadPageHandler: PropTypes.func.isRequired,
};

DeviationsBrowseForm.defaultProps = {
  publishedTimeBegin: null,
  publishedTimeEnd: null,
};
