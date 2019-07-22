import createDefaultDeviationsStatisticsState from '../statistics';
import * as sort from '../../../../consts/sort';
import { SHOW_ALL } from '../../../../consts/nsfw-options';
import { LIST } from '../../../../consts/tabs';

describe('Default deviations statistics state', () => {
  it('can be created without errors', () => {
    const state = createDefaultDeviationsStatisticsState();

    expect(state).toMatchObject({
      tab: LIST,
      page: 0,
      pageCount: 0,
      sortField: sort.FIELD_VIEWS,
      sortOrder: sort.ORDER_DESC,
      title: '',
      publishedTimeBegin: null,
      publishedTimeEnd: null,
      timestampEnd: null,
      nsfw: SHOW_ALL,
      filterByIds: false,
      deviations: [],
      metadata: null,
      pageLoading: false,
      showPagination: false,
    });
    expect(state).toHaveProperty('timestampBegin');
  });
});
