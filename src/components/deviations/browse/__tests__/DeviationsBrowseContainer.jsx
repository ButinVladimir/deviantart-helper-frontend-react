import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import config from '../../../../config';
import DeviationsBrowseContainer from '../DeviationsBrowseContainer';
import { getConfigProvider } from '../../../shared/ConfigContext';
import createDefaultState from '../../../../redux/states/state';
import clearLoadedDataActionCreator from '../../../../redux/action-creators/shared/clear-loaded-data';
import { deviationsBrowseLoadCurrentPageActionCreator } from '../../../../redux/action-creators/deviations/browse/load-page';

jest.mock(
  '../../../../redux/action-creators/shared/clear-loaded-data',
  () => jest.fn(() => ({ type: 'CLEAR_LOADED_DATA' })),
);
jest.mock(
  '../../../../redux/action-creators/deviations/browse/load-page',
  () => ({
    __esModule: true,
    deviationsBrowseLoadCurrentPageActionCreator: jest.fn(() => ({ type: 'LOAD_PAGE' })),
  }),
);

describe('DeviationsBrowseContainer', () => {
  it('can be rendered correctly', () => {
    const state = createDefaultState();

    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <DeviationsBrowseContainer />
        </Provider>
      </ConfigProvider>,
    );

    const actions = store.getActions();

    expect(wrapper).toMatchSnapshot();
    expect(clearLoadedDataActionCreator).toHaveBeenCalled();
    expect(deviationsBrowseLoadCurrentPageActionCreator).toHaveBeenCalled();
    expect(actions).toEqual([
      { type: 'CLEAR_LOADED_DATA' },
      { type: 'LOAD_PAGE' },
    ]);
  });
});
