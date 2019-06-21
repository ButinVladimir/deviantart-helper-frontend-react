import loadPage, {
  paramsHandler,
  deviationsStatisticsLoadPageActionCreator,
  getLockState,
  deviationsStatisticsLoadFirstPageActionCreator,
  deviationsStatisticsLoadCurrentPageActionCreator,
} from '../load-page';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import createFetchAction from '../../../fetch';
import { POST } from '../../../../../consts/fetch-methods';
import { LOCK_DEVIATIONS_STATISTICS } from '../../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_STATISTICS, PAGE_PARAM } from '../../../../../consts/server-routes';
import { DEVIATIONS_STATISTICS_LOAD_PAGE } from '../../../../actions';
import { FIELD_DOWNLOADS, ORDER_ASC } from '../../../../../consts/sort';
import { SHOW_ALL, SHOW_NON_NSFW } from '../../../../../consts/nsfw-options';
import { CHART } from '../../../../../consts/tabs';

jest.mock('../../../fetch', () => jest.fn());

describe('DeviationsStatisticsLoadPage action creator', () => {
  beforeEach(() => {
    createFetchAction.mockReset();
  });

  it('can handle full set of params', () => {
    const title = 'Title';
    const publishedTimeBegin = 1;
    const publishedTimeEnd = 2;
    const selectedIds = ['1', '2', '3'];
    const sortField = FIELD_DOWNLOADS;
    const sortOrder = ORDER_ASC;
    const timestampBegin = 3;
    const timestampEnd = 4;
    const tab = CHART;

    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          title,
          publishedTimeBegin,
          publishedTimeEnd,
          nsfw: SHOW_NON_NSFW,
          filterByIds: true,
          sortField,
          sortOrder,
          tab,
          timestampBegin,
          timestampEnd,
        },
        common: {
          selectedIds,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      title,
      publishedtimebegin: publishedTimeBegin,
      publishedtimeend: publishedTimeEnd,
      nsfw: false,
      ids: selectedIds,
      sortfield: sortField,
      sortorder: sortOrder,
      metadata: true,
      timestampbegin: timestampBegin,
      timestampend: timestampEnd,
    });
  });

  it('can handle empty set of params', () => {
    const sortField = FIELD_DOWNLOADS;
    const sortOrder = ORDER_ASC;

    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          publishedTimeBegin: null,
          publishedTimeEnd: null,
          nsfw: SHOW_ALL,
          filterByIds: false,
          sortField,
          sortOrder,
          timestampBegin: null,
          timestampEnd: null,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      sortfield: sortField,
      sortorder: sortOrder,
      metadata: false,
    });
  });

  it('can create action when metadata is present', () => {
    const page = 1;
    const deviations = [{ id: '1' }, { id: '2' }];
    const metadata = { 1: [[1, 2]], 2: [[3, 4]] };
    const pageCount = 3;

    const action = deviationsStatisticsLoadPageActionCreator(page)({
      deviations,
      metadata,
      pageCount,
    });

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_LOAD_PAGE,
      deviations,
      metadata,
      page,
      pageCount,
    });
  });

  it('can create action when metadata is missing', () => {
    const page = 1;
    const deviations = [{ id: '1' }, { id: '2' }];
    const metadata = null;
    const pageCount = 3;

    const action = deviationsStatisticsLoadPageActionCreator(page)({
      deviations,
      metadata,
      pageCount,
    });

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_LOAD_PAGE,
      deviations,
      metadata,
      page,
      pageCount,
    });
  });

  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          pageLoading: true,
        },
      },
    };

    expect(getLockState(state)).toBe(true);
  });

  it('can fetch data', () => {
    const page = 3;
    const config = new Config();
    loadPage(page, config);

    expect(createFetchAction.mock.calls).toEqual([
      [
        POST,
        SERVER_ROUTE_DEVIATIONS_STATISTICS.replace(PAGE_PARAM, page),
        getLockState,
        LOCK_DEVIATIONS_STATISTICS,
        createFetchAction.mock.calls[0][4],
        config,
        paramsHandler,
      ],
    ]);
    expect(createFetchAction.mock.calls[0][4]).toBeInstanceOf(Function);
  });

  it('can fetch first page', () => {
    const config = new Config();
    deviationsStatisticsLoadFirstPageActionCreator(config);

    expect(createFetchAction.mock.calls).toEqual([
      [
        POST,
        SERVER_ROUTE_DEVIATIONS_STATISTICS.replace(PAGE_PARAM, 0),
        getLockState,
        LOCK_DEVIATIONS_STATISTICS,
        createFetchAction.mock.calls[0][4],
        config,
        paramsHandler,
      ],
    ]);
    expect(createFetchAction.mock.calls[0][4]).toBeInstanceOf(Function);
  });

  it('can fetch current page', () => {
    const page = 3;
    const state = {
      ...createDefaultState(),
      deviations: {
        statistics: {
          page,
        },
      },
    };
    const config = new Config();
    deviationsStatisticsLoadCurrentPageActionCreator(config)(
      () => {},
      () => state,
    );

    expect(createFetchAction.mock.calls).toEqual([
      [
        POST,
        SERVER_ROUTE_DEVIATIONS_STATISTICS.replace(PAGE_PARAM, page),
        getLockState,
        LOCK_DEVIATIONS_STATISTICS,
        createFetchAction.mock.calls[0][4],
        config,
        paramsHandler,
      ],
    ]);
    expect(createFetchAction.mock.calls[0][4]).toBeInstanceOf(Function);
  });
});
