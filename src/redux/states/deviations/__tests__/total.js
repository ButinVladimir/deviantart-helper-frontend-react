import createDefaultDeviationsTotalState from '../total';

describe('Default deviations total state', () => {
  it('can be created without errors', () => {
    const state = createDefaultDeviationsTotalState();

    expect(state).toMatchObject({
      timestampEnd: 0,
      views: 0,
      favourites: 0,
      comments: 0,
      downloads: 0,
      totalLoading: false,
    });
    expect(state).toHaveProperty('timestampBegin');
  });
});
