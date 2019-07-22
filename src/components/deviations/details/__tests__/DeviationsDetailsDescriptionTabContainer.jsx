import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import createDefaultState from '../../../../redux/states/state';
import DeviationsDetailsDescriptionTabContainer from '../DeviationsDetailsDescriptionTabContainer';

describe('DeviationsDetailsDescriptionTabContainer', () => {
  it('can be rendered correctly', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          title: 'Title',
          thumbnail: {
            src: '/path/to/image',
            width: 1,
            height: 2,
          },
          url: 'http://path/to/deviation',
          publishedTime: 1,
          description: 'Description',
          nsfw: true,
          views: 2,
          favourites: 3,
          comments: 4,
          downloads: 5,
        },
      },
    };

    const mockStore = configureStore();
    const store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <DeviationsDetailsDescriptionTabContainer />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
