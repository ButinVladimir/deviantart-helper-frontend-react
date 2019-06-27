import React from 'react';
import { shallow } from 'enzyme';
import StatisticsLevel from '../StatisticsLevel';

describe('StatisticsLevel', () => {
  it('can be rendered correctly', () => {
    const titleValuePairs = [
      ['Views', 1],
      ['Favourites', 2],
      ['Comments', 3],
      ['Downloads', 4],
    ];
    const wrapper = shallow(<StatisticsLevel titleValuePairs={titleValuePairs} />);

    expect(wrapper).toMatchSnapshot();
  });
});
