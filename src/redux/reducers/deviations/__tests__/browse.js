import deviationsBrowseReducer from '../browse';
import createDefaultSharedState from '../../../states/shared';
import createDefaultDeviationsBrowseState from '../../../states/deviations/browse';
import clearLoadedDataActionCreator from '../../../action-creators/shared/clear-loaded-data';
import { deviationsBrowseLoadPageActionCreator } from '../../../action-creators/deviations/browse/load-page';
import deviationsToggleSelectionActionCreator from '../../../action-creators/deviations/common/toggle-selection';
import lockToggleActionCreator from '../../../action-creators/shared/lock-toggle';
import revokeActionCreator from '../../../action-creators/shared/revoke';
import * as deviationsBrowseForm from '../../../action-creators/deviations/browse/change-form-field-values';
import * as sort from '../../../../consts/sort';
import * as nsfwOptions from '../../../../consts/nsfw-options';
import { LOCK_LOAD_USER_INFO, LOCK_BROWSE_DEVIATIONS } from '../../../../consts/locks';

describe('Deviations browse reducer', () => {
  it('handles clearing loaded data', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = {
      ...createDefaultDeviationsBrowseState(),
      deviations: [{ id: 'deviationId' }],
    };

    const action = clearLoadedDataActionCreator();

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      deviations: [],
    });
  });

  it('handles changing published time begin', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const publishedTimeBegin = new Date();
    const action = deviationsBrowseForm.changePublishedTimeBeginActionCreator(publishedTimeBegin);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      publishedTimeBegin: publishedTimeBegin.getTime(),
    });
  });

  it('handles changing published time end', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const publishedTimeEnd = new Date();
    const action = deviationsBrowseForm.changePublishedTimeEndActionCreator(publishedTimeEnd);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      publishedTimeEnd: publishedTimeEnd.getTime(),
    });
  });

  it('handles changing sort field', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const sortField = sort.FIELD_DOWNLOADS;
    const action = deviationsBrowseForm.changeSortFieldActionCreator(sortField);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      sortField,
    });
  });

  it('handles changing sort order', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const sortOrder = sort.ORDER_ASC;
    const action = deviationsBrowseForm.changeSortOrderActionCreator(sortOrder);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      sortOrder,
    });
  });

  it('handles changing title', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const title = 'New title';
    const action = deviationsBrowseForm.changeTitleActionCreator(title);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      title,
    });
  });

  it('handles changing nsfw', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const nsfw = nsfwOptions.SHOW_NSFW;
    const action = deviationsBrowseForm.changeNsfwActionCreator(nsfw);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      nsfw,
    });
  });

  it('handles changing filter by ids', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const filterByIds = true;
    const action = deviationsBrowseForm.changeFilterByIdsActionCreator(filterByIds);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      filterByIds,
    });
  });

  it('handles turning on load page with deviations lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const action = lockToggleActionCreator(LOCK_BROWSE_DEVIATIONS, true);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      pageLoading: true,
    });
  });

  it('handles turning off load page with deviations lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = {
      ...createDefaultDeviationsBrowseState(),
      pageLoading: true,
    };

    const action = lockToggleActionCreator(LOCK_BROWSE_DEVIATIONS, false);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      pageLoading: false,
    });
  });

  it('handles loading page with deviations', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = {
      ...createDefaultDeviationsBrowseState(),
      pageLoading: true,
    };

    const page = 2;
    const deviations = [
      { id: '1' },
      { id: '2' },
    ];
    const pageCount = 3;
    const action = deviationsBrowseLoadPageActionCreator(page)({
      deviations,
      pageCount,
    });

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      deviations,
      page,
      pageCount,
      showPagination: true,
    });
  });

  it('handles toggling deviation selection when filter by ids is enabled', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = {
      ...createDefaultDeviationsBrowseState(),
      filterByIds: true,
      showPagination: true,
    };

    const action = deviationsToggleSelectionActionCreator('123');

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual({
      ...deviationsBrowseState,
      showPagination: false,
    });
  });

  it('handles toggling deviation selection when filter by ids is disabled', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = {
      ...createDefaultDeviationsBrowseState(),
      filterByIds: false,
      showPagination: true,
    };

    const action = deviationsToggleSelectionActionCreator('123');

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).not.toBe(deviationsBrowseState);
    expect(newDeviationsBrowseState).toEqual(deviationsBrowseState);
  });

  it('handles toggling unrelated lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const action = lockToggleActionCreator(LOCK_LOAD_USER_INFO, true);

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).toBe(deviationsBrowseState);
  });

  it('handles unrelated action', () => {
    const sharedState = createDefaultSharedState();
    const deviationsBrowseState = createDefaultDeviationsBrowseState();

    const action = revokeActionCreator();

    const newDeviationsBrowseState = deviationsBrowseReducer(
      deviationsBrowseState,
      sharedState,
      action,
    );

    expect(newDeviationsBrowseState).toBe(deviationsBrowseState);
  });
});
