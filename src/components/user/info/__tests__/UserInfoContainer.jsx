import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import UserInfoContainer from '../UserInfoContainer';
import { getConfigProvider } from '../../../shared/ConfigContext';
import defaultConfig from '../../../../config';
import createDefaultState from '../../../../redux/states/state';

describe('UserInfoContainer', () => {
  const mockStore = configureStore([thunk]);

  it('renders correctly', async () => {
    const store = mockStore(createDefaultState());
    const ConfigProvider = getConfigProvider();
    const wrapper = await shallow(
      <ConfigProvider value={defaultConfig}>
        <Provider store={store}>
          <UserInfoContainer />
        </Provider>
      </ConfigProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
