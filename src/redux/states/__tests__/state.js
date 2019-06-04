import getDefaultState from '../state';
import createDefaultSharedState from '../shared';
import createDefaultUserState from '../user';
import createDefaultDeviationsState from '../deviations';

jest.mock('../shared', () => jest.fn());
jest.mock('../user', () => jest.fn());
jest.mock('../deviations', () => jest.fn());

describe('Default state', () => {
  it('can be created without errors', () => {
    const state = getDefaultState();

    expect(createDefaultSharedState).toHaveBeenCalledTimes(1);
    expect(createDefaultUserState).toHaveBeenCalledTimes(1);
    expect(createDefaultDeviationsState).toHaveBeenCalledTimes(1);
    expect(state).toMatchObject({});
  });
});
