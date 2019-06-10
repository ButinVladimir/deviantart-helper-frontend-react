import deviationsStatisticsReducer from '../statistics';
import createDefaultSharedState from '../../../states/shared';
import createDefaultDeviationsStatisticsState from '../../../states/deviations/statistics';
import clearLoadedDataActionCreator from '../../../action-creators/shared/clear-loaded-data';
import deviationsToggleSelectionActionCreator from '../../../action-creators/deviations/common/toggle-selection';
import { deviationsStatisticsChangeTabActionCreator } from '../../../action-creators/deviations/statistics/change-tab';
import * as deviationsStatisticsForm from '../../../action-creators/deviations/statistics/change-form-field-values';
import { deviationsStatisticsLoadPageActionCreator } from '../../../action-creators/deviations/statistics/load-page';
import { deviationsStatisticsLoadMetadataActionCreator } from '../../../action-creators/deviations/statistics/load-metadata';
import lockToggleActionCreator from '../../../action-creators/shared/lock-toggle';
import revokeActionCreator from '../../../action-creators/shared/revoke';
import { CHART } from '../../../../consts/tabs';
import * as sort from '../../../../consts/sort';
import * as nsfwOptions from '../../../../consts/nsfw-options';
import { LOCK_LOAD_USER_INFO, LOCK_DEVIATIONS_STATISTICS } from '../../../../consts/locks';

describe('Deviations statistics reducer', () => {
  const metadata = {
    1: [1, 1],
    2: [2, 3],
  };

  it('handles clearing loaded data', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = {
      ...createDefaultDeviationsStatisticsState(),
      deviations: [{ id: 1 }, { id: 2 }],
      metadata,
    };

    const action = clearLoadedDataActionCreator();

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      deviations: [],
      metadata: null,
    });
  });

  it('handles changing tab', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const action = deviationsStatisticsChangeTabActionCreator(CHART);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      tab: CHART,
    });
  });

  it('handles changing published time begin', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const publishedTimeBegin = new Date();
    const action = deviationsStatisticsForm
      .changePublishedTimeBeginActionCreator(publishedTimeBegin);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      publishedTimeBegin: publishedTimeBegin.getTime(),
    });
  });

  it('handles changing published time end', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const publishedTimeEnd = new Date();
    const action = deviationsStatisticsForm
      .changePublishedTimeEndActionCreator(publishedTimeEnd);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      publishedTimeEnd: publishedTimeEnd.getTime(),
    });
  });

  it('handles changing timestamp begin', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const timestampBegin = new Date();
    const action = deviationsStatisticsForm
      .changeTimestampBeginActionCreator(timestampBegin);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      timestampBegin: timestampBegin.getTime(),
    });
  });

  it('handles changing timestamp end', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const timestampEnd = new Date();
    const action = deviationsStatisticsForm
      .changeTimestampEndActionCreator(timestampEnd);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      timestampEnd: timestampEnd.getTime(),
    });
  });

  it('handles changing sort field', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const sortField = sort.FIELD_TITLE;
    const action = deviationsStatisticsForm
      .changeSortFieldActionCreator(sortField);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      sortField,
    });
  });

  it('handles changing sort order', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const sortOrder = sort.ORDER_ASC;
    const action = deviationsStatisticsForm
      .changeSortOrderActionCreator(sortOrder);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      sortOrder,
    });
  });

  it('handles changing title', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const title = 'New title';
    const action = deviationsStatisticsForm
      .changeTitleActionCreator(title);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      title,
    });
  });

  it('handles changing nsfw', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const nsfw = nsfwOptions.SHOW_NSFW;
    const action = deviationsStatisticsForm
      .changeNsfwActionCreator(nsfw);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      nsfw,
    });
  });

  it('handles changing filter by ids', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const filterByIds = true;
    const action = deviationsStatisticsForm
      .changeFilterByIdsActionCreator(filterByIds);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      filterByIds,
    });
  });

  it('handles turning on load page lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const action = lockToggleActionCreator(LOCK_DEVIATIONS_STATISTICS, true);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      pageLoading: true,
    });
  });

  it('handles turning off load page lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = {
      ...createDefaultDeviationsStatisticsState(),
      pageLoading: true,
    };

    const action = lockToggleActionCreator(LOCK_DEVIATIONS_STATISTICS, false);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      pageLoading: false,
    });
  });

  it('handles loading page without metadata', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const page = 1;
    const deviations = [{ id: '1' }, { id: '2' }];
    const pageCount = 3;
    const action = deviationsStatisticsLoadPageActionCreator(page)({
      deviations,
      pageCount,
    });

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      page,
      deviations,
      metadata: null,
      pageCount,
      showPagination: true,
    });
  });

  it('handles loading page with metadata', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const page = 1;
    const deviations = [{ id: '1' }, { id: '2' }];
    const pageCount = 3;
    const action = deviationsStatisticsLoadPageActionCreator(page)({
      deviations,
      metadata,
      pageCount,
    });

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      page,
      deviations,
      metadata,
      pageCount,
      showPagination: true,
    });
  });

  it('handles loading metadata when it is not present', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const action = deviationsStatisticsLoadMetadataActionCreator({});

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      metadata: null,
    });
  });

  it('handles loading metadata when it is present', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const action = deviationsStatisticsLoadMetadataActionCreator({ metadata });

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      metadata,
    });
  });

  it('handles toggling deviation selection when filter by ids is enabled', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = {
      ...createDefaultDeviationsStatisticsState(),
      filterByIds: true,
      showPagination: true,
    };

    const action = deviationsToggleSelectionActionCreator('123');

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual({
      ...deviationsStatisticsState,
      showPagination: false,
    });
  });
  it('handles toggling deviation selection when filter by ids is disabled', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = {
      ...createDefaultDeviationsStatisticsState(),
      filterByIds: false,
      showPagination: true,
    };

    const action = deviationsToggleSelectionActionCreator('123');

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).not.toBe(deviationsStatisticsState);
    expect(newDeviationsStatisticsState).toEqual(deviationsStatisticsState);
  });

  it('handles toggling unrelated lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const action = lockToggleActionCreator(LOCK_LOAD_USER_INFO, true);

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).toBe(deviationsStatisticsState);
  });

  it('handles unrelated action', () => {
    const sharedState = createDefaultSharedState();
    const deviationsStatisticsState = createDefaultDeviationsStatisticsState();

    const action = revokeActionCreator();

    const newDeviationsStatisticsState = deviationsStatisticsReducer(
      deviationsStatisticsState,
      sharedState,
      action,
    );

    expect(newDeviationsStatisticsState).toBe(deviationsStatisticsState);
  });
});
