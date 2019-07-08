import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { FETCHING_INFO } from '../../../consts/user-states';
import HeaderFetchingInfoContainer from '../HeaderFetchingInfoContainer';
import { getConfigProvider } from '../../shared/ConfigContext';
import config from '../../../config';
import createDefaultState from '../../../redux/states/state';
import revokeQueryActionCreator from '../../../redux/action-creators/shared/revoke-query';

jest.mock('../../../redux/action-creators/shared/revoke-query', () => jest.fn(() => ({ type: 'TEST_ACTION' })));

describe('HeaderFetchingInfoContainer', () => {
  const state = {
    ...createDefaultState(),
    shared: {
      userState: FETCHING_INFO,
      revokeLoading: true,
    },
  };

  it('can be rendered correctly', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <HeaderFetchingInfoContainer />
        </Provider>
      </ConfigProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle revoking session', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <HeaderFetchingInfoContainer />
        </Provider>
      </ConfigProvider>,
    );

    wrapper.find('button#revoke-button').simulate('click');
    const actions = store.getActions();

    expect(revokeQueryActionCreator).toHaveBeenCalledWith(config);
    expect(actions).toEqual([
      { type: 'TEST_ACTION' },
    ]);
  });
});
