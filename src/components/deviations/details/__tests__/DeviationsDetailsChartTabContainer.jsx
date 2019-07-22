import React from 'react';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import config from '../../../../config';
import { getConfigProvider } from '../../../shared/ConfigContext';
import createDefaultState from '../../../../redux/states/state';
import DeviationsDetailsChartTabContainer from '../DeviationsDetailsChartTabContainer';
import { DATA_SET_DOWNLOADS } from '../../../../consts/data-sets';
import { ROUND_PERIOD_4_HOURS } from '../../../../consts/round-periods';
import deviationsDetailsLoadMetadata from '../../../../redux/action-creators/deviations/details/load-metadata';

jest.mock(
  '../../../../redux/action-creators/deviations/details/load-metadata',
  () => jest.fn(
    () => ({ type: 'SUBMIT' }),
  ),
);

describe('DeviationsDetailsChartTabContainer', () => {
  const state = {
    ...createDefaultState(),
    deviations: {
      chart: {
        dataSet: DATA_SET_DOWNLOADS,
        roundPeriod: ROUND_PERIOD_4_HOURS,
        showTime: true,
        showDifferences: true,
      },
      details: {
        id: '123-456',
        title: 'Title',
        timestampBegin: 1,
        timestampEnd: null,
        metadata: null,
        metadataLoading: false,
      },
    },
  };
  const mockStore = configureStore([thunk]);

  beforeEach(() => {
    deviationsDetailsLoadMetadata.mockClear();
  });

  it('can be rendered correctly', () => {
    const store = mockStore(state);
    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <DeviationsDetailsChartTabContainer />
        </Provider>
      </ConfigProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('can handle submitting', () => {
    const store = mockStore(state);
    const ConfigProvider = getConfigProvider();
    const wrapper = mount(
      <ConfigProvider value={config}>
        <Provider store={store}>
          <DeviationsDetailsChartTabContainer />
        </Provider>
      </ConfigProvider>,
    );

    wrapper.find('button#submit-button').simulate('click');

    expect(deviationsDetailsLoadMetadata).toHaveBeenCalledTimes(1);
    expect(deviationsDetailsLoadMetadata).toHaveBeenCalledWith(config);
  });
});
