import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import HeaderContainer from '../HeaderContainer';
import createDefaultState from '../../../redux/states/state';
import * as userStates from '../../../consts/user-states';

jest.mock('../../../redux/action-creators/shared/hide-message', () => jest.fn(() => ({ type: 'TEST_ACTION' })));

describe('HeaderContainer', () => {
  it('renders correctly', () => {
    const state = {
      ...createDefaultState(),
      shared: {
        userState: userStates.FETCHING_INFO,
        menuToggled: true,
        revokeLoading: false,
      },
    };

    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const wrapper = mount(
      <Provider store={store}>
        <HeaderContainer />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
