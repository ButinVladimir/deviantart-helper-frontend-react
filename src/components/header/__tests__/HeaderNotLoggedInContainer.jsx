import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import HeaderNotLoggedInContainer from '../HeaderNotLoggedInContainer';
import { getConfigProvider } from '../../shared/ConfigContext';
import config from '../../../config';
import createDefaultState from '../../../redux/states/state';

describe('HeaderNotLoggedInContainer', () => {
  it('can be rendered correctly', () => {
    const state = {
      ...createDefaultState(),
      shared: {
        userInfoLoading: true,
      },
    };

    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <HeaderNotLoggedInContainer />
        </Provider>
      </ConfigProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
