import React from 'react';
import { shallow } from 'enzyme';
import HeaderNotLoggedIn from '../HeaderNotLoggedIn';
import config from '../../../config';

describe('HeaderNotLoggedIn', () => {
  it('can be rendered correctly', () => {
    const wrapper = shallow(
      <HeaderNotLoggedIn
        userInfoLoading
        config={config}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
