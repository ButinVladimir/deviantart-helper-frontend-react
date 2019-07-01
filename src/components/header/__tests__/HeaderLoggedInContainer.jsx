import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { FULLY_LOGINNED } from '../../../consts/user-states';
import HeaderLoggedInContainer from '../HeaderLoggedInContainer';
import { getConfigProvider } from '../../shared/ConfigContext';
import config from '../../../config';
import createDefaultState from '../../../redux/states/state';
import toggleMenuActionCreator from '../../../redux/action-creators/shared/toggle-menu';
import revokeQueryActionCreator from '../../../redux/action-creators/shared/revoke-query';
import startFetchData from '../../../redux/action-creators/shared/start-fetch-data';

jest.mock('../../../redux/action-creators/shared/toggle-menu', () => jest.fn(() => ({ type: 'TOGGLE_MENU' })));
jest.mock('../../../redux/action-creators/shared/revoke-query', () => jest.fn(() => ({ type: 'REVOKE' })));
jest.mock('../../../redux/action-creators/shared/start-fetch-data', () => jest.fn(() => ({ type: 'FETCH_DATA' })));

describe('HeaderLoggedInContainer', () => {
  const state = {
    ...createDefaultState(),
    shared: {
      fetchDataLoading: true,
      revokeLoading: false,
      userState: FULLY_LOGINNED,
    },
    user: {
      userName: 'User Name',
      userIcon: 'path/to/user/icon',
    },
  };

  it('can be rendered correctly', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <MemoryRouter>
        <ConfigProvider value={config}>
          <Provider store={store}>
            <HeaderLoggedInContainer />
          </Provider>
        </ConfigProvider>
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle toggling menu', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <MemoryRouter>
        <ConfigProvider value={config}>
          <Provider store={store}>
            <HeaderLoggedInContainer />
          </Provider>
        </ConfigProvider>
      </MemoryRouter>,
    );

    wrapper.find('div#toggle-menu-button').simulate('click');
    const actions = store.getActions();

    expect(toggleMenuActionCreator).toHaveBeenCalled();
    expect(actions).toEqual([{ type: 'TOGGLE_MENU' }]);
  });

  it('can handle revoking session', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <MemoryRouter>
        <ConfigProvider value={config}>
          <Provider store={store}>
            <HeaderLoggedInContainer />
          </Provider>
        </ConfigProvider>
      </MemoryRouter>,
    );

    wrapper.find('button#revoke-button').simulate('click');
    const actions = store.getActions();

    expect(revokeQueryActionCreator).toHaveBeenCalled();
    expect(actions).toEqual([{ type: 'REVOKE' }]);
  });

  it('can handle fetching data', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <MemoryRouter>
        <ConfigProvider value={config}>
          <Provider store={store}>
            <HeaderLoggedInContainer />
          </Provider>
        </ConfigProvider>
      </MemoryRouter>,
    );

    wrapper.find('button#start-fetch-data-button').simulate('click');
    const actions = store.getActions();

    expect(startFetchData).toHaveBeenCalled();
    expect(actions).toEqual([{ type: 'FETCH_DATA' }]);
  });
});
