import revokeActionCreator from '../revoke';
import { REVOKE } from '../../../actions';

describe('Revoke action creator', () => {
  it('can create action', () => {
    const action = revokeActionCreator();

    expect(action).toEqual({
      type: REVOKE,
    });
  });
});
