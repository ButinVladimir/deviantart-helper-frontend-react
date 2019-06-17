import createDefaultDeviationsTotalState from '../total';
import { STATS } from '../../../../consts/tabs';

describe('Default deviations total state', () => {
  it('can be created without errors', () => {
    const state = createDefaultDeviationsTotalState();

    expect(state).toMatchObject({
      timestampEnd: 0,
      tab: STATS,
      views: 0,
      favourites: 0,
      comments: 0,
      downloads: 0,
      metadata: null,
      statsLoaded: false,
      totalLoading: false,
    });
    expect(state).toHaveProperty('timestampBegin');
  });
});
