import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from '../UserInfo';

describe('UserInfo', () => {
  it('can be rendered correctly using default props', () => {
    const wrapper = shallow(<UserInfo fetchUserData={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('can be rendered correctly', () => {
    const wrapper = shallow(
      <UserInfo
        fetchUserData={jest.fn()}
        userId="123-456"
        userName="UserName"
        userType="regular"
        accessTokenExpires={1001}
        refreshTokenExpires={2001}
        fetchDateThreshold={3001}
        requestDateThreshold={4001}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('handles mounting', () => {
    const fetchUserData = jest.fn();
    shallow(<UserInfo fetchUserData={fetchUserData} />);

    expect(fetchUserData).toHaveBeenCalled();
  });
});
