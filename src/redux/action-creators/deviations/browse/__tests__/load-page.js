import loadPage, {
  paramsHandler,
  deviationsBrowseLoadPageActionCreator,
  getLockState,
  deviationsBrowseLoadFirstPageActionCreator,
  deviationsBrowseLoadCurrentPageActionCreator,
} from '../load-page';
import createDefaultState from '../../../../states/state';
import Config from '../../../../../config/config';
import createFetchAction from '../../../fetch';
import { POST } from '../../../../../consts/fetch-methods';
import { LOCK_BROWSE_DEVIATIONS } from '../../../../../consts/locks';
import { SERVER_ROUTE_DEVIATIONS_BROWSE, PAGE_PARAM } from '../../../../../consts/server-routes';
import { DEVIATIONS_BROWSE_LOAD_PAGE } from '../../../../actions';
import { FIELD_DOWNLOADS, ORDER_ASC } from '../../../../../consts/sort';
import { SHOW_ALL, SHOW_NON_NSFW } from '../../../../../consts/nsfw-options';

jest.mock('../../../fetch', () => jest.fn());

describe('DeviationsBrowseLoadPage action creator', () => {
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

    const state = {
      ...createDefaultState(),
      deviations: {
        browse: {
          title,
          publishedTimeBegin,
          publishedTimeEnd,
          nsfw: SHOW_NON_NSFW,
          filterByIds: true,
          sortField,
          sortOrder,
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
    });
  });

  it('can handle empty set of params', () => {
    const sortField = FIELD_DOWNLOADS;
    const sortOrder = ORDER_ASC;

    const state = {
      ...createDefaultState(),
      deviations: {
        browse: {
          publishedTimeBegin: null,
          publishedTimeEnd: null,
          nsfw: SHOW_ALL,
          filterByIds: false,
          sortField,
          sortOrder,
        },
      },
    };

    const params = paramsHandler(state);

    expect(params).toEqual({
      sortfield: sortField,
      sortorder: sortOrder,
    });
  });

  it('can create action', () => {
    const page = 1;
    const deviations = [{ id: '1' }, { id: '2' }];
    const pageCount = 3;

    const action = deviationsBrowseLoadPageActionCreator(page)({ deviations, pageCount });

    expect(action).toEqual({
      type: DEVIATIONS_BROWSE_LOAD_PAGE,
      deviations,
      page,
      pageCount,
    });
  });

  it('can get lock state', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        browse: {
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
        SERVER_ROUTE_DEVIATIONS_BROWSE.replace(PAGE_PARAM, page),
        getLockState,
        LOCK_BROWSE_DEVIATIONS,
        createFetchAction.mock.calls[0][4],
        config,
        paramsHandler,
      ],
    ]);
    expect(createFetchAction.mock.calls[0][4]).toBeInstanceOf(Function);
  });

  it('can fetch first page', () => {
    const config = new Config();
    deviationsBrowseLoadFirstPageActionCreator(config);

    expect(createFetchAction.mock.calls).toEqual([
      [
        POST,
        SERVER_ROUTE_DEVIATIONS_BROWSE.replace(PAGE_PARAM, 0),
        getLockState,
        LOCK_BROWSE_DEVIATIONS,
        createFetchAction.mock.calls[0][4],
        config,
        paramsHandler,
      ],
    ]);
    expect(createFetchAction.mock.calls[0][4]).toBeInstanceOf(Function);
  });

  it('can fetch current page', () => {
    const state = {
      ...createDefaultState(),
      deviations: {
        browse: {
          page: 3,
        },
      },
    };
    const config = new Config();
    deviationsBrowseLoadCurrentPageActionCreator(config)(
      () => {},
      () => state,
    );

    expect(createFetchAction.mock.calls).toEqual([
      [
        POST,
        SERVER_ROUTE_DEVIATIONS_BROWSE.replace(PAGE_PARAM, 3),
        getLockState,
        LOCK_BROWSE_DEVIATIONS,
        createFetchAction.mock.calls[0][4],
        config,
        paramsHandler,
      ],
    ]);
    expect(createFetchAction.mock.calls[0][4]).toBeInstanceOf(Function);
  });
});
