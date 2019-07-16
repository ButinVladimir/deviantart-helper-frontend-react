import React from 'react';
import { shallow } from 'enzyme';
import DeviationsDetailsDescriptionTab from '../DeviationsDetailsDescriptionTab';

describe('DeviationsDetailsDescriptionTab', () => {
  it('can be rendered correctly', () => {
    const wrapper = shallow(
      <DeviationsDetailsDescriptionTab
        title="Deviation title"
        thumbnail={{
          src: '/path/to/thumbnail',
          width: 1,
          height: 2,
        }}
        url="https://path/to/deviation"
        publishedTime={4}
        description="Description"
        nsfw
        views={1}
        favourites={2}
        comments={3}
        downloads={4}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
