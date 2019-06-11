import hideMessageActionCreator from '../hide-message';
import { MESSAGE_HIDE } from '../../../actions';

describe('HideMessage action creator', () => {
  it('can create action', () => {
    const action = hideMessageActionCreator();

    expect(action).toEqual({
      type: MESSAGE_HIDE,
    });
  });
});
