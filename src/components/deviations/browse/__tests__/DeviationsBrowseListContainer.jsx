import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import createDefaultStore from '../../../../redux/states/state';
import DeviationsBrowseListContainer from '../DeviationsBrowseListContainer';
import { DEVIATIONS_COMMON_TOGGLE_SELECTION } from '../../../../redux/actions';

describe('DeviationsBrowseListContainer', () => {
  const deviations = ['1', '2', '3', '4'].map(id => ({
    id,
    title: `Deviation ${id}`,
    url: `/path/to/deviation/${id}`,
    thumbnail: {
      height: 1,
      width: 2,
      src: `/path/to/thumbnail/${id}`,
    },
    publishedTime: 10,
    nsfw: false,
    views: 1,
    favourites: 2,
    comments: 3,
    downloads: 4,
  }));

  const state = {
    ...createDefaultStore(),
    deviations: {
      browse: {
        deviations,
      },
      common: {
        selectedIds: [],
      },
    },
  };

  it('can be rendered correctly', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <DeviationsBrowseListContainer />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle toggling selection', () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <DeviationsBrowseListContainer />
        </Provider>
      </MemoryRouter>,
    );

    wrapper.find('input#selection-1').simulate('change');
    const actions = store.getActions();

    expect(actions).toEqual([
      { type: DEVIATIONS_COMMON_TOGGLE_SELECTION, id: '1' },
    ]);
  });
});
