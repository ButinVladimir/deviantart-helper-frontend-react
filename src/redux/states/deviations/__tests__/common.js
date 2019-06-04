import createDefaultDeviationsCommonState from '../common';

describe('Default deviations common state', () => {
  it('can be created without errors', () => {
    const state = createDefaultDeviationsCommonState();

    expect(state).toEqual({
      selectedIds: [],
    });
  });
});
