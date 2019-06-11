import lockToggleActionCreator from '../lock-toggle';
import { LOCK_TOGGLE } from '../../../actions';
import { LOCK_LOAD_USER_INFO } from '../../../../consts/locks';

describe('LockToggle action creator', () => {
  it('can create action', () => {
    const action = lockToggleActionCreator(LOCK_LOAD_USER_INFO, true);

    expect(action).toEqual({
      type: LOCK_TOGGLE,
      lock: LOCK_LOAD_USER_INFO,
      value: true,
    });
  });
});
