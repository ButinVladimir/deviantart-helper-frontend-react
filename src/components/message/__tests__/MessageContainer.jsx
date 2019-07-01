import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MessageContainer from '../MessageContainer';
import createDefaultState from '../../../redux/states/state';
import hideMessageActionCreator from '../../../redux/action-creators/shared/hide-message';

jest.mock('../../../redux/action-creators/shared/hide-message', () => jest.fn(() => ({ type: 'TEST_ACTION' })));

describe('MessageContainer', () => {
  it('can be rendered correctly', () => {
    const state = {
      ...createDefaultState(),
      shared: {
        message: 'Message text',
        messageColor: 'info',
        showMessage: true,
      },
    };

    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const wrapper = mount(
      <Provider store={store}>
        <MessageContainer />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can hide message', () => {
    const state = {
      ...createDefaultState(),
      shared: {
        message: 'Message text',
        messageColor: 'info',
        showMessage: true,
      },
    };

    const mockStore = configureStore([thunk]);
    const store = mockStore(state);

    const wrapper = mount(
      <Provider store={store}>
        <MessageContainer />
      </Provider>,
    );

    wrapper.find('button#hide-message-button').simulate('click');
    const actions = store.getActions();

    expect(hideMessageActionCreator).toHaveBeenCalled();
    expect(actions).toEqual([
      { type: 'TEST_ACTION' },
    ]);
  });
});
