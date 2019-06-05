import reducer from '../reducer';
import deviationsReducer from '../deviations';
import sharedReducer from '../shared';
import userReducer from '../user';

jest.mock('../deviations', () => jest.fn());
jest.mock('../shared', () => jest.fn());
jest.mock('../user', () => jest.fn());

describe('Reducer', () => {
  it('can be created without errors', () => {
    const state = reducer();

    expect(deviationsReducer).toHaveBeenCalledTimes(1);
    expect(sharedReducer).toHaveBeenCalledTimes(1);
    expect(userReducer).toHaveBeenCalledTimes(1);
    expect(state).toMatchObject({});
  });
});
