import React from 'react';
import { shallow } from 'enzyme';
import CustomLoader from '../CustomLoader';

describe('CustomLoader', () => {
  it('can be rendered correctly', () => {
    const wrapper = shallow(<CustomLoader />);

    expect(wrapper).toMatchSnapshot();
  });
});
