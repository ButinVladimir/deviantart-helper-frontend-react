import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import * as userStates from '../../../consts/user-states';

describe('Message', () => {
  it('renders correctly when user state is not loginned', () => {
    const wrapper = shallow(
      <Header
        userState={userStates.NOT_LOGGINED}
        menuToggled={false}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when user state is fetching info', () => {
    const wrapper = shallow(
      <Header
        userState={userStates.FETCHING_INFO}
        menuToggled={false}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when user state is fully loginned', () => {
    const wrapper = shallow(
      <Header
        userState={userStates.FULLY_LOGINNED}
        menuToggled
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
