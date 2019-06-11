import clearLoadedDataActionCreator from '../clear-loaded-data';
import { CLEAR_LOADED_DATA } from '../../../actions';

describe('ClearLoadedData action creator', () => {
  it('can create action', () => {
    const action = clearLoadedDataActionCreator();

    expect(action).toEqual({
      type: CLEAR_LOADED_DATA,
    });
  });
});
