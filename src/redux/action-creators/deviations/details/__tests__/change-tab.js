import deviationsDetailsChangeTab, { deviationsDetailsChangeTabActionCreator } from '../change-tab';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import deviationsDetailsLoadMetadata from '../load-metadata';
import { DEVIATIONS_DETAILS_CHANGE_TAB } from '../../../../actions';
import { CHART, DESCRIPTION } from '../../../../../consts/tabs';

jest.mock('../load-metadata', () => jest.fn());

describe('DeviationsDetailsChangeTab action creator', () => {
  it('can create action', () => {
    const tab = CHART;
    const action = deviationsDetailsChangeTabActionCreator(tab);

    expect(action).toEqual({
      type: DEVIATIONS_DETAILS_CHANGE_TAB,
      tab,
    });
  });

  it('will not change tab if details lock is enabled', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          detailsLoading: true,
          metadataLoading: false,
          metadata: null,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsDetailsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).not.toHaveBeenCalled();
  });

  it('will not change tab if metadata lock is enabled', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          detailsLoading: false,
          metadataLoading: true,
          metadata: null,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsDetailsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).not.toHaveBeenCalled();
  });

  it('will change tab and load metadata if chart tab selected and metadata is missing', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          detailsLoading: false,
          metadataLoading: false,
          metadata: null,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsDetailsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_DETAILS_CHANGE_TAB,
      tab,
    }]);
    expect(deviationsDetailsLoadMetadata).toHaveBeenCalledWith(config);
  });

  it('will change tab if other than chart tab selected and metadata is missing', () => {
    const tab = DESCRIPTION;
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          detailsLoading: false,
          metadataLoading: false,
          metadata: null,
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsDetailsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_DETAILS_CHANGE_TAB,
      tab,
    }]);
  });

  it('will change tab if chart tab selected and metadata is present', () => {
    const tab = CHART;
    const state = {
      ...createDefaultState(),
      deviations: {
        details: {
          detailsLoading: false,
          metadataLoading: false,
          metadata: [],
        },
      },
    };
    const config = new Config();
    const dispatch = jest.fn();
    deviationsDetailsChangeTab(tab, config)(
      dispatch,
      () => state,
    );

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_DETAILS_CHANGE_TAB,
      tab,
    }]);
  });
});
