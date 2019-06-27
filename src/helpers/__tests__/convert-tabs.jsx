import React from 'react';
import Tabs from 'react-bulma-components/lib/components/tabs';
import { shallow } from 'enzyme';
import convertTabs from '../convert-tabs';
import { deviationDetailsTabs, PREVIEW, CHART } from '../../consts/tabs';

describe('Convert tabs helper', () => {
  it('can render correctly', () => {
    const wrapper = shallow(
      <div>
        {convertTabs(deviationDetailsTabs, PREVIEW, () => {})}
      </div>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle tab select', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <div>
        {convertTabs(deviationDetailsTabs, PREVIEW, tab => () => handler(tab))}
      </div>,
    );

    wrapper.find(Tabs.Tab).at(2).simulate('click');

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(CHART);
  });
});
