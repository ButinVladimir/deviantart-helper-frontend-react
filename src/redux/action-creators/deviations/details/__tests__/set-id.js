import deviationsDetailsSetId, { deviationsDetailsSetIdActionCreator } from '../set-id';
import Config from '../../../../../config/config';
import { DEVIATIONS_DETAILS_SET_ID } from '../../../../actions';

describe('DeviationsDetailsSetId action creator', () => {
  it('can create action', () => {
    const id = '123';
    const action = deviationsDetailsSetIdActionCreator(id);

    expect(action).toEqual({
      type: DEVIATIONS_DETAILS_SET_ID,
      id,
    });
  });

  it('can load data after setting id', () => {
    const id = '123';
    const config = new Config();
    const dispatch = jest.fn();
    deviationsDetailsSetId(id, config)(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{
      type: DEVIATIONS_DETAILS_SET_ID,
      id,
    }]);
    expect(dispatch.mock.calls[1][0]).toBeInstanceOf(Function);
  });
});
