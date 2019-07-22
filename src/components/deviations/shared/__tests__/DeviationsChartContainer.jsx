import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import createDefaultStore from '../../../../redux/states/state';
import DeviationsChartContainer from '../DeviationsChartContainer';
import { DATA_SET_DOWNLOADS } from '../../../../consts/data-sets';
import { ROUND_PERIOD_4_HOURS } from '../../../../consts/round-periods';
import * as deviationsChart from '../../../../redux/action-creators/deviations/chart/change-form-field-values';

jest.mock(
  '../../../../redux/action-creators/deviations/chart/change-form-field-values',
  () => ({
    __esModule: true,
    changeDataSetActionCreator: jest.fn(() => ({ type: 'CHANGE_DATA_SET' })),
    changeRoundPeriodActionCreator: jest.fn(() => ({ type: 'CHANGE_ROUND_PERIOD' })),
    changeShowTimeActionCreator: jest.fn(() => ({ type: 'CHANGE_SHOW_TIME' })),
    changeShowDifferencesActionCreator: jest.fn(() => ({ type: 'CHANGE_SHOW_DIFFERENCES' })),
  }),
);

describe('DeviationsChartContainer', () => {
  const createStore = () => {
    const mockStore = configureStore([]);

    return mockStore({
      ...createDefaultStore(),
      deviations: {
        chart: {
          dataSet: DATA_SET_DOWNLOADS,
          roundPeriod: ROUND_PERIOD_4_HOURS,
          showTime: true,
          showDifferences: true,
        },
      },
    });
  };

  const metadata = { 1: [[1, 2, 3], [4, 5, 6]] };
  const titlesMap = new Map();
  titlesMap.set(1, 'Test entity');

  const props = { metadata, titlesMap };

  it('can be rendered correctly', () => {
    const store = createStore();
    const wrapper = mount(
      <Provider store={store}>
        <DeviationsChartContainer {...props} />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle changing data set', () => {
    const store = createStore();
    const wrapper = mount(
      <Provider store={store}>
        <DeviationsChartContainer {...props} />
      </Provider>,
    );

    wrapper.find('select#data-set').simulate('change');
    const actions = store.getActions();

    expect(deviationsChart.changeDataSetActionCreator).toHaveBeenCalled();
    expect(actions).toEqual([{ type: 'CHANGE_DATA_SET' }]);
  });

  it('can handle changing round period', () => {
    const store = createStore();
    const wrapper = mount(
      <Provider store={store}>
        <DeviationsChartContainer {...props} />
      </Provider>,
    );

    wrapper.find('select#round-period').simulate('change');
    const actions = store.getActions();

    expect(deviationsChart.changeRoundPeriodActionCreator).toHaveBeenCalled();
    expect(actions).toEqual([{ type: 'CHANGE_ROUND_PERIOD' }]);
  });

  it('can handle changing show time', () => {
    const store = createStore();
    const wrapper = mount(
      <Provider store={store}>
        <DeviationsChartContainer {...props} />
      </Provider>,
    );

    wrapper.find('input#show-time').simulate('change');
    const actions = store.getActions();

    expect(deviationsChart.changeShowTimeActionCreator).toHaveBeenCalled();
    expect(actions).toEqual([{ type: 'CHANGE_SHOW_TIME' }]);
  });

  it('can handle changing show differences', () => {
    const store = createStore();
    const wrapper = mount(
      <Provider store={store}>
        <DeviationsChartContainer {...props} />
      </Provider>,
    );

    wrapper.find('input#show-differences').simulate('change');
    const actions = store.getActions();

    expect(deviationsChart.changeShowDifferencesActionCreator).toHaveBeenCalled();
    expect(actions).toEqual([{ type: 'CHANGE_SHOW_DIFFERENCES' }]);
  });
});
