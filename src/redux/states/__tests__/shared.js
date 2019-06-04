import createDefaultSharedState from '../shared';
import { NOT_LOGGINED } from '../../../consts/user-states';

describe('Default shared state', () => {
  it('can be created without errors', () => {
    const state = createDefaultSharedState();

    expect(state).toEqual({
      menuToggled: false,
      userState: NOT_LOGGINED,
      revokeLoading: false,
      fetchDataLoading: false,
      messageColor: '',
      message: '',
      showMessage: false,
    });
  });
});
