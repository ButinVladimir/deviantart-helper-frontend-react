import showErrorActionCreator from '../show-error';
import { ERROR_SHOW } from '../../../actions';

describe('ShowError action creator', () => {
  it('can create action', () => {
    const message = 'Message';
    const action = showErrorActionCreator(message);

    expect(action).toEqual({
      type: ERROR_SHOW,
      message,
    });
  });
});
