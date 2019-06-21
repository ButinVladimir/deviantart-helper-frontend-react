import deviationsTotalReducer from '../total';
import createDefaultSharedState from '../../../states/shared';
import createDefaultDeviationsTotalState from '../../../states/deviations/total';
import clearLoadedDataActionCreator from '../../../action-creators/shared/clear-loaded-data';
import { deviationsTotalChangeTabActionCreator } from '../../../action-creators/deviations/total/change-tab';
import * as deviationsTotalForm from '../../../action-creators/deviations/total/change-form-field-values';
import { deviationsTotalStartLoadingActionCreator } from '../../../action-creators/deviations/total/start-loading';
import { deviationsTotalLoadDataActionCreator } from '../../../action-creators/deviations/total/load-data';
import { deviationsTotalLoadMetadataActionCreator } from '../../../action-creators/deviations/total/load-metadata';
import lockToggleActionCreator from '../../../action-creators/shared/lock-toggle';
import revokeActionCreator from '../../../action-creators/shared/revoke';
import { LOCK_LOAD_USER_INFO, LOCK_DEVIATIONS_TOTAL } from '../../../../consts/locks';
import { CHART } from '../../../../consts/tabs';

describe('Deviations total reducer', () => {
  const data = {
    views: 1,
    favourites: 2,
    comments: 3,
    downloads: 4,
  };
  const metadata = [[1, 2], [3, 4]];

  it('handles clearing loaded data', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = {
      ...createDefaultDeviationsTotalState(),
      ...data,
      statsLoaded: true,
      metadata,
    };

    const action = clearLoadedDataActionCreator();

    const newDeviationsTotalState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsTotalState).not.toBe(deviationsTotalState);
    expect(newDeviationsTotalState).toEqual({
      ...deviationsTotalState,
      views: 0,
      favourites: 0,
      comments: 0,
      downloads: 0,
      statsLoaded: false,
      metadata: null,
    });
  });

  it('handles changing tab', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = createDefaultDeviationsTotalState();

    const tab = CHART;
    const action = deviationsTotalChangeTabActionCreator(tab);

    const newDeviationsTotalState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsTotalState).not.toBe(deviationsTotalState);
    expect(newDeviationsTotalState).toEqual({
      ...deviationsTotalState,
      tab,
    });
  });

  it('handles changing timestamp begin', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = createDefaultDeviationsTotalState();

    const timestampBegin = new Date();
    const action = deviationsTotalForm.changeTimestampBeginActionCreator(timestampBegin);

    const newDeviationsTotalState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsTotalState).not.toBe(deviationsTotalState);
    expect(newDeviationsTotalState).toEqual({
      ...deviationsTotalState,
      timestampBegin: timestampBegin.getTime(),
    });
  });

  it('handles changing timestamp end', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = createDefaultDeviationsTotalState();

    const timestampEnd = new Date();
    const action = deviationsTotalForm.changeTimestampEndActionCreator(timestampEnd);

    const newDeviationsTotalState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsTotalState).not.toBe(deviationsTotalState);
    expect(newDeviationsTotalState).toEqual({
      ...deviationsTotalState,
      timestampEnd: timestampEnd.getTime(),
    });
  });

  it('handles turning on load lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = createDefaultDeviationsTotalState();

    const action = lockToggleActionCreator(LOCK_DEVIATIONS_TOTAL, true);

    const newDeviationsDetailsState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsTotalState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsTotalState,
      totalLoading: true,
    });
  });

  it('handles turning off load lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = {
      ...createDefaultDeviationsTotalState(),
      totalLoading: true,
    };

    const action = lockToggleActionCreator(LOCK_DEVIATIONS_TOTAL, false);

    const newDeviationsDetailsState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsTotalState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsTotalState,
      totalLoading: false,
    });
  });

  it('handles starting loading data', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = {
      ...createDefaultDeviationsTotalState(),
      statsLoaded: true,
      metadata,
    };

    const action = deviationsTotalStartLoadingActionCreator();

    const newDeviationsDetailsState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsTotalState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsTotalState,
      statsLoaded: false,
      metadata: null,
    });
  });

  it('handles loading data', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = createDefaultDeviationsTotalState();

    const action = deviationsTotalLoadDataActionCreator(data);

    const newDeviationsDetailsState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsTotalState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsTotalState,
      ...data,
      statsLoaded: true,
    });
  });

  it('handles loading metadata', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = createDefaultDeviationsTotalState();

    const action = deviationsTotalLoadMetadataActionCreator({ metadata });

    const newDeviationsDetailsState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsTotalState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsTotalState,
      metadata,

    });
  });

  it('handles toggling unrelated lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = createDefaultDeviationsTotalState();

    const action = lockToggleActionCreator(LOCK_LOAD_USER_INFO, true);

    const newDeviationsDetailsState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).toBe(deviationsTotalState);
  });

  it('handles unrelated action', () => {
    const sharedState = createDefaultSharedState();
    const deviationsTotalState = createDefaultDeviationsTotalState();

    const action = revokeActionCreator();

    const newDeviationsDetailsState = deviationsTotalReducer(
      deviationsTotalState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).toBe(deviationsTotalState);
  });
});
