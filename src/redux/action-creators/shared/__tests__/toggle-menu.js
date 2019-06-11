import toggleMenuActionCreator from '../toggle-menu';
import { TOGGLE_MENU } from '../../../actions';

describe('ToggleMenu action creator', () => {
  it('can create action', () => {
    const action = toggleMenuActionCreator();

    expect(action).toEqual({
      type: TOGGLE_MENU,
    });
  });
});
