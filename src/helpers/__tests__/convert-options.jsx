import React from 'react';
import { shallow } from 'enzyme';
import convertOptions from '../convert-options';
import { roundPeriodOptions } from '../../consts/round-periods';

describe('Convert options helper', () => {
  it('can render correctly', () => {
    const wrapper = shallow(<select>{convertOptions(roundPeriodOptions)}</select>);

    expect(wrapper).toMatchSnapshot();
  });
});
