import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Tabs from 'react-bulma-components/lib/components/tabs';
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
import { datePickerProps, datetimePickerProps } from '../../../helpers/datepicker-props';
import * as tabs from '../../../consts/tabs';
import convertTabs from '../../../helpers/convert-tabs';

export default function DeviationsStatisticsForm({
  page,
  pageCount,
  tab,
  sortField,
  sortOrder,
  title,
  publishedTimeBegin,
  publishedTimeEnd,
  timestampBegin,
  timestampEnd,
  nsfw,
  filterByIds,
  pageLoading,
  showPagination,
  changeTabHandler,
  sortFieldChangeHandler,
  sortOrderChangeHandler,
  titleChangeHandler,
  publishedTimeBeginChangeHandler,
  publishedTimeEndChangeHandler,
  timestampBeginChangeHandler,
  timestampEndChangeHandler,
  nsfwChangeHandler,
  filterByIdsChangeHandler,
  submitHandler,
  loadPageHandler,
}) {
  const mappedTabs = convertTabs(tabs.deviationStatisticsTabs, tab, changeTabHandler);
  const publishedTimeBeginDate = publishedTimeBegin !== null ? new Date(publishedTimeBegin) : null;
  const publishedTimeEndDate = publishedTimeEnd !== null ? new Date(publishedTimeEnd) : null;
  const timestampBeginDate = timestampBegin !== null ? new Date(timestampBegin) : null;
  const timestampEndDate = timestampEnd !== null ? new Date(timestampEnd) : null;
  const sortOptions = convertOptions(deviationsSortOptions);
  const orderOptionsElements = convertOptions(orderOptions);
  const nsfwOptionsElements = convertOptions(nsfwOptions);

  return (
    <Section>
      <Container>
        <Content>
          <Heading size={2}>Deviations detailed statistics</Heading>
        </Content>

        <Tabs type="toggle">
          {mappedTabs}
        </Tabs>

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
                  {...datePickerProps}
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
              <Label>Timestamp range beginning</Label>
              <Control>
                <DatePicker
                  {...datetimePickerProps}
                  disabled={pageLoading}
                  selectsStart
                  name="timestampBegin"
                  startDate={timestampBeginDate}
                  endDate={timestampEndDate}
                  selected={timestampBeginDate}
                  onChange={timestampBeginChangeHandler}
                />
              </Control>
            </Field>
          </Columns.Column>

          <Columns.Column>
            <Field>
              <Label>Timestamp range end</Label>
              <Control>
                <DatePicker
                  {...datetimePickerProps}
                  disabled={pageLoading}
                  selectsEnd
                  name="timestampEnd"
                  startDate={timestampBeginDate}
                  endDate={timestampEndDate}
                  selected={timestampEndDate}
                  onChange={timestampEndChangeHandler}
                />
              </Control>
            </Field>
          </Columns.Column>

          <Columns.Column>
            <Field>
              <Label>NSFW</Label>
              <Control>
                <Select
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
                <Button color="primary" onClick={submitHandler} loading={pageLoading}>
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

DeviationsStatisticsForm.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  tab: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
  sortOrder: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  publishedTimeBegin: PropTypes.number,
  publishedTimeEnd: PropTypes.number,
  timestampBegin: PropTypes.number,
  timestampEnd: PropTypes.number,
  nsfw: PropTypes.string.isRequired,
  filterByIds: PropTypes.bool.isRequired,
  pageLoading: PropTypes.bool.isRequired,
  showPagination: PropTypes.bool.isRequired,
  changeTabHandler: PropTypes.func.isRequired,
  sortFieldChangeHandler: PropTypes.func.isRequired,
  sortOrderChangeHandler: PropTypes.func.isRequired,
  titleChangeHandler: PropTypes.func.isRequired,
  publishedTimeBeginChangeHandler: PropTypes.func.isRequired,
  publishedTimeEndChangeHandler: PropTypes.func.isRequired,
  timestampBeginChangeHandler: PropTypes.func.isRequired,
  timestampEndChangeHandler: PropTypes.func.isRequired,
  nsfwChangeHandler: PropTypes.func.isRequired,
  filterByIdsChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  loadPageHandler: PropTypes.func.isRequired,
};

DeviationsStatisticsForm.defaultProps = {
  publishedTimeBegin: null,
  publishedTimeEnd: null,
  timestampBegin: null,
  timestampEnd: null,
};
