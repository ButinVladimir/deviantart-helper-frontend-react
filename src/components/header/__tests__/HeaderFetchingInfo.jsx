import React from 'react';
import { shallow } from 'enzyme';
import HeaderFetchingInfo from '../HeaderFetchingInfo';

describe('HeaderFetchingInfo', () => {
  it('can be rendered correctly', () => {
    const wrapper = shallow(<HeaderFetchingInfo revokeLoading={false} revokeHandler={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle revoking session', () => {
    const revokeHandler = jest.fn();
    const wrapper = shallow(
      <HeaderFetchingInfo revokeLoading={false} revokeHandler={revokeHandler} />,
    );

    wrapper.find('#revoke-button').simulate('click');

    expect(revokeHandler).toHaveBeenCalled();
  });
});
