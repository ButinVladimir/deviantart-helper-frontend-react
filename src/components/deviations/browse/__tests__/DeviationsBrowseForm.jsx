import React from 'react';
import { shallow } from 'enzyme';
import DeviationsBrowseForm from '../DeviationsBrowseForm';
import { FIELD_COMMENTS, ORDER_DESC } from '../../../../consts/sort';
import { SHOW_NSFW } from '../../../../consts/nsfw-options';

describe('DeviationsBrowseForm', () => {
  const commonProps = {
    page: 1,
    pageCount: 3,
    sortField: FIELD_COMMENTS,
    sortOrder: ORDER_DESC,
    title: 'Title',
    publishedTimeBegin: null,
    publishedTimeEnd: null,
    nsfw: SHOW_NSFW,
    filterByIds: false,
    pageLoading: false,
    showPagination: false,
    sortFieldChangeHandler: () => {},
    sortOrderChangeHandler: () => {},
    titleChangeHandler: () => {},
    publishedTimeBeginChangeHandler: () => {},
    publishedTimeEndChangeHandler: () => {},
    nsfwChangeHandler: () => {},
    filterByIdsChangeHandler: () => {},
    submitHandler: () => {},
    loadPageHandler: () => {},
  };

  it('can be rendered correctly when pagination is shown', () => {
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        publishedTimeBegin={10001}
        publishedTimeEnd={20001}
        showPagination
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can be rendered correctly when pagination is not shown', () => {
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        pageLoading
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle changing sort field', () => {
    const sortFieldChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        sortFieldChangeHandler={sortFieldChangeHandler}
      />,
    );

    wrapper.find('#sort-field').simulate('change');

    expect(sortFieldChangeHandler).toHaveBeenCalled();
  });

  it('can handle changing sort order', () => {
    const sortOrderChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        sortOrderChangeHandler={sortOrderChangeHandler}
      />,
    );

    wrapper.find('#sort-order').simulate('change');

    expect(sortOrderChangeHandler).toHaveBeenCalled();
  });

  it('can handle changing title', () => {
    const titleChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        titleChangeHandler={titleChangeHandler}
      />,
    );

    wrapper.find('#title').simulate('change');

    expect(titleChangeHandler).toHaveBeenCalled();
  });

  it('can handle changing published time beginning', () => {
    const publishedTimeBeginChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        publishedTimeBeginChangeHandler={publishedTimeBeginChangeHandler}
      />,
    );

    wrapper.find('#published-time-begin').simulate('change');

    expect(publishedTimeBeginChangeHandler).toHaveBeenCalled();
  });

  it('can handle changing published time end', () => {
    const publishedTimeEndChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        publishedTimeEndChangeHandler={publishedTimeEndChangeHandler}
      />,
    );

    wrapper.find('#published-time-end').simulate('change');

    expect(publishedTimeEndChangeHandler).toHaveBeenCalled();
  });

  it('can handle changing nsfw toggle', () => {
    const nsfwChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        nsfwChangeHandler={nsfwChangeHandler}
      />,
    );

    wrapper.find('#nsfw').simulate('change');

    expect(nsfwChangeHandler).toHaveBeenCalled();
  });

  it('can handle changing filter by ids toggle', () => {
    const filterByIdsChangeHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        filterByIdsChangeHandler={filterByIdsChangeHandler}
      />,
    );

    wrapper.find('#filter-by-ids').simulate('change');

    expect(filterByIdsChangeHandler).toHaveBeenCalled();
  });

  it('can handle submitting', () => {
    const submitHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        submitHandler={submitHandler}
      />,
    );

    wrapper.find('#submit-button').simulate('click');

    expect(submitHandler).toHaveBeenCalled();
  });

  it('can handle loading page', () => {
    const loadPageHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsBrowseForm
        {...commonProps}
        showPagination
        loadPageHandler={loadPageHandler}
      />,
    );

    wrapper.find('#pagination').simulate('change');

    expect(loadPageHandler).toHaveBeenCalled();
  });
});
