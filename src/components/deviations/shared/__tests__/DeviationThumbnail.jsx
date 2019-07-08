import React from 'react';
import { shallow } from 'enzyme';
import DeviationThumbnail from '../DeviationThumbnail';

describe('DeviationThumbnail', () => {
  const thumbnailProps = {
    title: 'Title',
    thumbnail: {
      src: '/path/to/thumbnail',
      width: 1,
      height: 2,
    },
    url: '/path/to/deviation',
    publishedTime: 1234,
  };

  it('can be rendered correctly when deviation is not NSFW', () => {
    const wrapper = shallow(<DeviationThumbnail {...thumbnailProps} nsfw={false} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('can be rendered correctly when deviation is NSFW', () => {
    const wrapper = shallow(<DeviationThumbnail {...thumbnailProps} nsfw />);

    expect(wrapper).toMatchSnapshot();
  });
});
