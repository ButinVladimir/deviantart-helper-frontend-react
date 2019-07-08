import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import config from '../../../../config';
import { getConfigProvider } from '../../../shared/ConfigContext';
import createDefaultStore from '../../../../redux/states/state';
import DeviationsBrowsePaginationContainer from '../DeviationsBrowsePaginationContainer';
import deviationsBrowseLoadPage from '../../../../redux/action-creators/deviations/browse/load-page';

jest.mock('../../../../redux/action-creators/deviations/browse/load-page', () => jest.fn(page => ({ type: 'LOAD_PAGE', page })));

describe('DeviationsBrowsePaginationContainer', () => {
  const state = {
    ...createDefaultStore(),
    deviations: {
      browse: {
        page: 1,
        pageCount: 4,
        showPagination: true,
      },
    },
  };
  it('can be rendered correctly', () => {
    const ConfigProvider = getConfigProvider();
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <DeviationsBrowsePaginationContainer />
        </Provider>
      </ConfigProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle loading page', () => {
    const ConfigProvider = getConfigProvider();
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <DeviationsBrowsePaginationContainer />
        </Provider>
      </ConfigProvider>,
    );

    wrapper.find('ul.pagination-list a.pagination-link').at(0).simulate('click');
    const actions = store.getActions();

    const page = 0;
    expect(deviationsBrowseLoadPage).toHaveBeenCalledWith(page, config);
    expect(actions).toEqual([
      { type: 'LOAD_PAGE', page },
    ]);
  });
});
