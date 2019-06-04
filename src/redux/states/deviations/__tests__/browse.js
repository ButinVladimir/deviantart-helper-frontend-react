import createDefaultDeviationsBrowseState from '../browse';
import * as sort from '../../../../consts/sort';
import { SHOW_ALL } from '../../../../consts/nsfw-options';

describe('Default deviations browse state', () => {
  it('can be created without errors', () => {
    const state = createDefaultDeviationsBrowseState();

    expect(state).toEqual({
      page: 0,
      pageCount: 0,
      sortField: sort.FIELD_PUBLISHED_TIME,
      sortOrder: sort.ORDER_DESC,
      title: '',
      publishedTimeBegin: 0,
      publishedTimeEnd: 0,
      nsfw: SHOW_ALL,
      filterByIds: false,
      deviations: [],
      pageLoading: false,
      showPagination: false,
    });
  });
});
