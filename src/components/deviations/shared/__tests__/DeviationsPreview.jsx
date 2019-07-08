import React from 'react';
import { shallow } from 'enzyme';
import DeviationsPreview from '../DeviationsPreview';

describe('DeviationsPreview', () => {
  const deviationProps = {
    id: '1',
    title: 'Title',
    thumbnail: {
      src: '/path/to/thumbnail',
      width: 1,
      height: 2,
    },
    nsfw: true,
    url: '/path/to/deviation',
    publishedTime: 1234,
    views: 1,
    favourites: 2,
    comments: 3,
    downloads: 4,
    selected: true,
  };

  it('can be rendered correctly', () => {
    const wrapper = shallow(
      <DeviationsPreview {...deviationProps} toggleSelectionHandler={() => {}} />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle toggling selection', () => {
    const toggleSelectionHandler = jest.fn();
    const wrapper = shallow(
      <DeviationsPreview {...deviationProps} toggleSelectionHandler={toggleSelectionHandler} />,
    );

    wrapper.find('#selection-1').simulate('change');

    expect(toggleSelectionHandler).toHaveBeenCalled();
  });
});
