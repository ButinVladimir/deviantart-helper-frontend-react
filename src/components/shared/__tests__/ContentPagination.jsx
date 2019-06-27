import React from 'react';
import { shallow } from 'enzyme';
import ContentPagination from '../ContentPagination';

describe('ContentPagination', () => {
  it('can be rendered correctly when pagination is not enabled', () => {
    const wrapper = shallow(<ContentPagination
      page={4}
      pageCount={9}
      showPagination={false}
      loadPageHandler={() => {}}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('can be rendered correctly when pagination is enabled', () => {
    const wrapper = shallow(<ContentPagination
      page={4}
      pageCount={9}
      showPagination
      loadPageHandler={() => {}}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
