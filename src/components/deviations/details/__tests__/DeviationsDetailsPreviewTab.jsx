import React from 'react';
import { shallow } from 'enzyme';
import DeviationsDetailsPreviewTab from '../DeviationsDetailsPreviewTab';

describe('DeviationsDetailsPreviewTab', () => {
  it('can be rendered correctly', () => {
    const wrapper = shallow(
      <DeviationsDetailsPreviewTab
        preview={{
          src: '/path/to/image',
          width: 3,
          height: 4,
        }}
        title="Deviation title"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
