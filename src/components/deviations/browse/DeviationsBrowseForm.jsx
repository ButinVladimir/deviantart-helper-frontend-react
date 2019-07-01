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
  Checkbox,
} from 'react-bulma-components/lib/components/form';
import convertOptions from '../../../helpers/convert-options';
import { orderOptions, deviationsSortOptions } from '../../../consts/sort';
import { nsfwOptions } from '../../../consts/nsfw-options';
import { datePickerProps } from '../../../helpers/datepicker-props';

export default function DeviationsBrowseForm({
  page,
  pageCount,
  sortField,
  sortOrder,
  title,
  publishedTimeBegin,
  publishedTimeEnd,
  nsfw,
  filterByIds,
  pageLoading,
  showPagination,
  sortFieldChangeHandler,
  sortOrderChangeHandler,
  titleChangeHandler,
  publishedTimeBeginChangeHandler,
  publishedTimeEndChangeHandler,
  nsfwChangeHandler,
  filterByIdsChangeHandler,
  submitHandler,
  loadPageHandler,
}) {
  const publishedTimeBeginDate = publishedTimeBegin ? new Date(publishedTimeBegin) : null;
  const publishedTimeEndDate = publishedTimeEnd ? new Date(publishedTimeEnd) : null;
  const sortOptions = convertOptions(deviationsSortOptions);
  const orderOptionsElements = convertOptions(orderOptions);
  const nsfwOptionsElements = convertOptions(nsfwOptions);

  return (
    <Section>
      <Container>
        <Content>
          <Heading size={2}>Browse deviations</Heading>
        </Content>
        <Field>
          <Label>Title</Label>
          <Control>
            <Input
              id="title"
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
                  {...datePickerProps}
                  id="published-time-begin"
                  disabled={pageLoading}
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
                  {...datePickerProps}
                  id="published-time-end"
                  disabled={pageLoading}
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
                  id="sort-field"
                  disabled={pageLoading}
                  name="sortField"
                  value={sortField}
                  onChange={sortFieldChangeHandler}
                >
                  {sortOptions}
                </Select>
              </Control>
            </Field>
          </Columns.Column>

          <Columns.Column narrow>
            <Field>
              <Label>Sort order</Label>
              <Control>
                <Select
                  id="sort-order"
                  disabled={pageLoading}
                  name="sortOrder"
                  value={sortOrder}
                  onChange={sortOrderChangeHandler}
                >
                  {orderOptionsElements}
                </Select>
              </Control>
            </Field>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column>
            <Field>
              <Label>NSFW</Label>
              <Control>
                <Select
                  id="nsfw"
                  disabled={pageLoading}
                  name="nsfw"
                  value={nsfw}
                  onChange={nsfwChangeHandler}
                >
                  {nsfwOptionsElements}
                </Select>
              </Control>
            </Field>
          </Columns.Column>

          <Columns.Column narrow>
            <Field>
              <Label>Filter by selected</Label>
              <Control>
                <Checkbox
                  id="filter-by-ids"
                  disabled={pageLoading}
                  name="filterbyselected"
                  checked={filterByIds}
                  onChange={filterByIdsChangeHandler}
                />
              </Control>
            </Field>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column>
            {showPagination && (
              <Pagination
                id="pagination"
                // Pagination in Bulma starts from 1 while pagination on backend start from 0.
                current={page + 1}
                total={pageCount}
                delta={3}
                onChange={loadPageHandler}
              />
            )}
          </Columns.Column>
          <Columns.Column narrow>
            <Field kind="group" align="right">
              <Control>
                <Button id="submit-button" color="primary" onClick={submitHandler} loading={pageLoading}>
                  {showPagination ? 'Refresh' : 'Submit' }
                </Button>
              </Control>
            </Field>
          </Columns.Column>
        </Columns>

      </Container>
    </Section>
  );
}

DeviationsBrowseForm.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  sortField: PropTypes.string.isRequired,
  sortOrder: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  publishedTimeBegin: PropTypes.number,
  publishedTimeEnd: PropTypes.number,
  nsfw: PropTypes.string.isRequired,
  filterByIds: PropTypes.bool.isRequired,
  pageLoading: PropTypes.bool.isRequired,
  showPagination: PropTypes.bool.isRequired,
  sortFieldChangeHandler: PropTypes.func.isRequired,
  sortOrderChangeHandler: PropTypes.func.isRequired,
  titleChangeHandler: PropTypes.func.isRequired,
  publishedTimeBeginChangeHandler: PropTypes.func.isRequired,
  publishedTimeEndChangeHandler: PropTypes.func.isRequired,
  nsfwChangeHandler: PropTypes.func.isRequired,
  filterByIdsChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  loadPageHandler: PropTypes.func.isRequired,
};

DeviationsBrowseForm.defaultProps = {
  publishedTimeBegin: null,
  publishedTimeEnd: null,
};
