import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import createDefaultState from '../../../../redux/states/state';
import DeviationsDetailsPreviewTabContainer from '../DeviationsDetailsPreviewTabContainer';

describe('DeviationsDetailsPreviewTabContainer', () => {
  it('can be rendered correctly', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          preview: {
            src: '/path/to/image',
            width: 1,
            height: 2,
          },
          title: 'Title',
        },
      },
    };

    const mockStore = configureStore();
    const store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <DeviationsDetailsPreviewTabContainer />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
