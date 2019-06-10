import deviationsDetailsReducer from '../details';
import createDefaultSharedState from '../../../states/shared';
import createDefaultDeviationsDetailsState from '../../../states/deviations/details';
import clearLoadedDataActionCreator from '../../../action-creators/shared/clear-loaded-data';
import { deviationsDetailsChangeTabActionCreator } from '../../../action-creators/deviations/details/change-tab';
import * as deviationsDetailsForm from '../../../action-creators/deviations/details/change-form-field-values';
import { deviationsDetailsSetIdActionCreator } from '../../../action-creators/deviations/details/set-id';
import { deviationsDetailsLoadDataActionCreator } from '../../../action-creators/deviations/details/load-data';
import { deviationsDetailsLoadMetadataActionCreator } from '../../../action-creators/deviations/details/load-metadata';
import lockToggleActionCreator from '../../../action-creators/shared/lock-toggle';
import revokeActionCreator from '../../../action-creators/shared/revoke';
import { CHART } from '../../../../consts/tabs';
import { LOCK_LOAD_USER_INFO, LOCK_DEVIATION_DETAILS, LOCK_DEVIATION_DETAILS_METADATA } from '../../../../consts/locks';

describe('Deviations details reducer', () => {
  const id = 'Id';
  const deviation = {
    title: 'Title',
    url: '/path/to/deviation',
    publishedTime: 1,
    preview: {
      src: '/path/to/image',
      width: 2,
      height: 3,
    },
    thumbnail: {
      src: '/path/to/thumbnail',
      width: 10,
      height: 11,
    },
    description: 'Description',
    nsfw: true,
    views: 4,
    favourites: 5,
    comments: 6,
    downloads: 7,
  };

  it('handles clearing loaded data', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = {
      ...createDefaultDeviationsDetailsState(),
      id,
      ...deviation,
      metadata: { [id]: [[1, 1], [2, 3]] },
    };

    const action = clearLoadedDataActionCreator();

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      id: '',
      title: '',
      url: '',
      publishedTime: 0,
      preview: {
        src: '',
        width: 0,
        height: 0,
      },
      thumbnail: {
        src: '',
        width: 0,
        height: 0,
      },
      description: '',
      nsfw: false,
      views: 0,
      favourites: 0,
      comments: 0,
      downloads: 0,
      metadata: null,
    });
  });

  it('handles changing tab', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = createDefaultDeviationsDetailsState();

    const tab = CHART;
    const action = deviationsDetailsChangeTabActionCreator(tab);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      tab,
    });
  });

  it('handles changing timestamp begin', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = createDefaultDeviationsDetailsState();

    const timestampBegin = new Date();
    const action = deviationsDetailsForm.changeTimestampBeginActionCreator(timestampBegin);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      timestampBegin: timestampBegin.getTime(),
    });
  });

  it('handles changing timestamp end', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = createDefaultDeviationsDetailsState();

    const timestampEnd = new Date();
    const action = deviationsDetailsForm.changeTimestampEndActionCreator(timestampEnd);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      timestampEnd: timestampEnd.getTime(),
    });
  });

  it('handles changing id', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = createDefaultDeviationsDetailsState();

    const action = deviationsDetailsSetIdActionCreator(id);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      id,
    });
  });

  it('handles turning on load data lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = createDefaultDeviationsDetailsState();

    const action = lockToggleActionCreator(LOCK_DEVIATION_DETAILS, true);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      detailsLoading: true,
    });
  });

  it('handles turning off load data lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = {
      ...createDefaultDeviationsDetailsState(),
      detailsLoading: true,
    };

    const action = lockToggleActionCreator(LOCK_DEVIATION_DETAILS, false);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      detailsLoading: false,
    });
  });

  it('handles turning on load metadata lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = createDefaultDeviationsDetailsState();

    const action = lockToggleActionCreator(LOCK_DEVIATION_DETAILS_METADATA, true);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      metadataLoading: true,
    });
  });

  it('handles turning off load metadata lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = {
      ...createDefaultDeviationsDetailsState(),
      metadataLoading: true,
    };

    const action = lockToggleActionCreator(LOCK_DEVIATION_DETAILS_METADATA, false);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      metadataLoading: false,
    });
  });

  it('handles loading data without metadata', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = {
      ...createDefaultDeviationsDetailsState(),
      id,
    };

    const action = deviationsDetailsLoadDataActionCreator({ deviation });

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      ...deviation,
      metadata: null,
    });
  });

  it('handles loading data with metadata', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = {
      ...createDefaultDeviationsDetailsState(),
      id,
    };

    const metadata = [[1, 1], [2, 3]];
    const action = deviationsDetailsLoadDataActionCreator({
      deviation,
      metadata,
    });

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      ...deviation,
      metadata: { [id]: metadata },
    });
  });

  it('handles loading metadata when it is not present', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = {
      ...createDefaultDeviationsDetailsState(),
      id,
    };

    const action = deviationsDetailsLoadMetadataActionCreator({});

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      metadata: null,
    });
  });

  it('handles loading metadata', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = {
      ...createDefaultDeviationsDetailsState(),
      id,
    };

    const metadata = { [id]: [[1, 1], [2, 3]] };
    const action = deviationsDetailsLoadMetadataActionCreator({
      metadata,
    });

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).not.toBe(deviationsDetailsState);
    expect(newDeviationsDetailsState).toEqual({
      ...deviationsDetailsState,
      metadata,
    });
  });

  it('handles toggling unrelated lock', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = createDefaultDeviationsDetailsState();

    const action = lockToggleActionCreator(LOCK_LOAD_USER_INFO, true);

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).toBe(deviationsDetailsState);
  });

  it('handles unrelated action', () => {
    const sharedState = createDefaultSharedState();
    const deviationsDetailsState = createDefaultDeviationsDetailsState();

    const action = revokeActionCreator();

    const newDeviationsDetailsState = deviationsDetailsReducer(
      deviationsDetailsState,
      sharedState,
      action,
    );

    expect(newDeviationsDetailsState).toBe(deviationsDetailsState);
  });
});
