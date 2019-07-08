import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import DeviationsBrowseFormContainer from '../DeviationsBrowseFormContainer';
import config from '../../../../config';
import { getConfigProvider } from '../../../shared/ConfigContext';
import createDefaultState from '../../../../redux/states/state';
import { FIELD_COMMENTS, ORDER_DESC } from '../../../../consts/sort';
import { SHOW_NSFW } from '../../../../consts/nsfw-options';
import {
  changeSortFieldActionCreator,
  changeSortOrderActionCreator,
  changeTitleActionCreator,
  changePublishedTimeBeginActionCreator,
  changePublishedTimeEndActionCreator,
  changeNsfwActionCreator,
  changeFilterByIdsActionCreator,
} from '../../../../redux/action-creators/deviations/browse/change-form-field-values';
import deviationsBrowseLoad, { deviationsBrowseLoadFirstPageActionCreator } from '../../../../redux/action-creators/deviations/browse/load-page';

jest.mock(
  '../../../../redux/action-creators/deviations/browse/change-form-field-values',
  () => ({
    __esModule: true,
    changeSortFieldActionCreator: jest.fn(() => ({ type: 'CHANGE_SORT_FIELD' })),
    changeSortOrderActionCreator: jest.fn(() => ({ type: 'CHANGE_SORT_ORDER' })),
    changeTitleActionCreator: jest.fn(() => ({ type: 'CHANGE_TITLE' })),
    changePublishedTimeBeginActionCreator: jest.fn(() => ({ type: 'CHANGE_PUBLISHED_TIME_BEGIN' })),
    changePublishedTimeEndActionCreator: jest.fn(() => ({ type: 'CHANGE_PUBLISHED_TIME_END' })),
    changeNsfwActionCreator: jest.fn(() => ({ type: 'CHANGE_NSFW' })),
    changeFilterByIdsActionCreator: jest.fn(() => ({ type: 'CHANGE_FILTER_BY_IDS' })),
  }),
);

jest.mock(
  '../../../../redux/action-creators/deviations/browse/load-page',
  () => ({
    __esModule: true,
    default: jest.fn(() => ({ type: 'LOAD_PAGE' })),
    deviationsBrowseLoadFirstPageActionCreator: jest.fn(() => ({ type: 'SUBMIT_FORM' })),
  }),
);

describe('DeviationsBrowseFormContainer', () => {
  const state = {
    ...createDefaultState(),
    deviations: {
      browse: {
        page: 1,
        pageCount: 3,
        sortField: FIELD_COMMENTS,
        sortOrder: ORDER_DESC,
        title: 'Title',
        publishedTimeBegin: 10001,
        publishedTimeEnd: 20001,
        nsfw: SHOW_NSFW,
        filterByIds: true,
        pageLoading: false,
        showPagination: true,
      },
    },
  };

  beforeEach(() => {
    changeSortFieldActionCreator.mockClear();
    changeSortOrderActionCreator.mockClear();
    changeTitleActionCreator.mockClear();
    changePublishedTimeBeginActionCreator.mockClear();
    changePublishedTimeEndActionCreator.mockClear();
    changeNsfwActionCreator.mockClear();
    changeFilterByIdsActionCreator.mockClear();
    deviationsBrowseLoad.mockClear();
    deviationsBrowseLoadFirstPageActionCreator.mockClear();
  });

  it('can be rendered correctly', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <DeviationsBrowseFormContainer />
        </Provider>
      </ConfigProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('Form controls', () => {
    let wrapper = null;
    let store;

    beforeEach(() => {
      const mockStore = configureStore([thunk]);
      store = mockStore(state);

      const ConfigProvider = getConfigProvider();
      wrapper = mount(
        <ConfigProvider value={config}>
          <Provider store={store}>
            <DeviationsBrowseFormContainer />
          </Provider>
        </ConfigProvider>,
      );
    });

    it('can handle changing sort field', () => {
      wrapper.find('select#sort-field').simulate('change');

      expect(changeSortFieldActionCreator).toHaveBeenCalled();
      expect(store.getActions()).toEqual([{ type: 'CHANGE_SORT_FIELD' }]);
    });

    it('can handle changing sort order', () => {
      wrapper.find('select#sort-order').simulate('change');

      expect(changeSortOrderActionCreator).toHaveBeenCalled();
      expect(store.getActions()).toEqual([{ type: 'CHANGE_SORT_ORDER' }]);
    });

    it('can handle changing title', () => {
      wrapper.find('input#title').simulate('change');

      expect(changeTitleActionCreator).toHaveBeenCalled();
      expect(store.getActions()).toEqual([{ type: 'CHANGE_TITLE' }]);
    });

    it('can handle changing nsfw', () => {
      wrapper.find('select#nsfw').simulate('change');

      expect(changeNsfwActionCreator).toHaveBeenCalled();
      expect(store.getActions()).toEqual([{ type: 'CHANGE_NSFW' }]);
    });

    it('can handle changing filter by ids', () => {
      wrapper.find('input#filter-by-ids').simulate('change');

      expect(changeFilterByIdsActionCreator).toHaveBeenCalled();
      expect(store.getActions()).toEqual([{ type: 'CHANGE_FILTER_BY_IDS' }]);
    });

    it('can handle submitting', () => {
      wrapper.find('button#submit-button').simulate('click');

      expect(deviationsBrowseLoadFirstPageActionCreator).toHaveBeenCalledWith(config);
      expect(store.getActions()).toEqual([{ type: 'SUBMIT_FORM' }]);
    });

    it('can handle loading page', () => {
      wrapper.find('ul.pagination-list a.pagination-link').at(0).simulate('click');

      expect(deviationsBrowseLoad).toHaveBeenCalledWith(0, config);
      expect(store.getActions()).toEqual([{ type: 'LOAD_PAGE' }]);
    });
  });
});
