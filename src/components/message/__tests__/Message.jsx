import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('Message', () => {
  const message = 'Message text';
  const messageColor = 'info';

  it('renders correctly when message is shown', () => {
    const wrapper = shallow(
      <Message
        showMessage
        message={message}
        messageColor={messageColor}
        hideMessageHandler={jest.fn()}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when message is hidden', () => {
    const wrapper = shallow(
      <Message
        showMessage={false}
        message={message}
        messageColor={messageColor}
        hideMessageHandler={jest.fn()}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can hide message', () => {
    const hideMessageHandler = jest.fn();
    const wrapper = shallow(
      <Message
        showMessage
        message={message}
        messageColor={messageColor}
        hideMessageHandler={hideMessageHandler}
      />,
    );

    wrapper.find('Button').simulate('click');

    expect(hideMessageHandler).toHaveBeenCalled();
  });
});
