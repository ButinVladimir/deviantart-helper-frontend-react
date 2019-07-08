import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import UserInfoContainer from '../UserInfoContainer';
import { getConfigProvider } from '../../../shared/ConfigContext';
import config from '../../../../config';
import createDefaultState from '../../../../redux/states/state';
import userLoadInfo from '../../../../redux/action-creators/user/load-info';

jest.mock('../../../../redux/action-creators/user/load-info', () => jest.fn(() => ({ type: 'TEST_ACTION' })));

describe('UserInfoContainer', () => {
  it('can be rendered correctly', () => {
    const state = {
      ...createDefaultState(),
      user: {
        userId: 'User Id',
        userName: 'User Name',
        userType: 'regular',
        accessTokenExpires: 1001,
        refreshTokenExpires: 2001,
        fetchDateThreshold: 3001,
        requestDateThreshold: 4001,
      },
    };

    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <UserInfoContainer />
        </Provider>
      </ConfigProvider>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(userLoadInfo).toHaveBeenCalledWith(config);
    expect(store.getActions()).toEqual([
      { type: 'TEST_ACTION' },
    ]);
  });
});
