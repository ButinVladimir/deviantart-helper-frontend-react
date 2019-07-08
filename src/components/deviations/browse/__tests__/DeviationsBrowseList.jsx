import React from 'react';
import { shallow } from 'enzyme';
import DeviationsBrowseList from '../DeviationsBrowseList';

describe('DeviationsBrowseList', () => {
  it('can be rendered correctly', () => {
    const deviations = ['1', '2', '3', '4'].map(id => ({
      id,
      title: `Deviation ${id}`,
      url: `/path/to/deviation/${id}`,
      preview: {
        height: 1,
        width: 2,
        src: `/path/to/thumbnail/${id}`,
      },
      views: 1,
      favourites: 2,
      comments: 3,
      downloads: 4,
    }));

    const wrapper = shallow(
      <DeviationsBrowseList
        deviations={deviations}
        selectedIds={['2', '3']}
        toggleSelectionHandler={() => {}}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
