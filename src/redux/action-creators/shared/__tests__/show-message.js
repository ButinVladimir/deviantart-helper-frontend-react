import showMessageActionCreator from '../show-message';
import { MESSAGE_SHOW } from '../../../actions';

describe('ShowMessage action creator', () => {
  it('can create action', () => {
    const message = 'Message';
    const action = showMessageActionCreator(message);

    expect(action).toEqual({
      type: MESSAGE_SHOW,
      message,
    });
  });
});
