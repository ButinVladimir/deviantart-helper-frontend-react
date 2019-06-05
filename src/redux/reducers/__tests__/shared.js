import sharedReducer from '../shared';
import createDefaultSharedState from '../../states/shared';
import toggleMenuActionCreator from '../../action-creators/shared/toggle-menu';
import { userLoadInfoActionCreator } from '../../action-creators/user/load-info';
import showMessageActionCreator from '../../action-creators/shared/show-message';
import hideMessageActionCreator from '../../action-creators/shared/hide-message';
import showErrorActionCreator from '../../action-creators/shared/show-error';
import revokeActionCreator from '../../action-creators/shared/revoke';
import lockToggleActionCreator from '../../action-creators/shared/lock-toggle';
import { changeTitleActionCreator } from '../../action-creators/deviations/browse/change-form-field-values';
import { LOCK_BROWSE_DEVIATIONS, LOCK_REVOKE, LOCK_START_LOADING_DATA } from '../../../consts/locks';
import * as userStates from '../../../consts/user-states';

describe('Shared reducer', () => {
  it('handles turning on menu', () => {
    const sharedState = createDefaultSharedState();

    const action = toggleMenuActionCreator();

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({ ...sharedState, menuToggled: true });
  });

  it('handles turning off menu', () => {
    const sharedState = {
      ...createDefaultSharedState(),
      menuToggled: true,
    };

    const action = toggleMenuActionCreator();

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({ ...sharedState, menuToggled: false });
  });

  it('handles loading user info when user is not fully loginned', () => {
    const sharedState = createDefaultSharedState();

    const action = userLoadInfoActionCreator({ fullyLoginned: false });

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      userState: userStates.FETCHING_INFO,
      showMessage: true,
      messageColor: 'info',
      message: 'Your info is being fetched at this moment. Please try later.',
    });
  });

  it('handles loading user info when user is fully loginned', () => {
    const sharedState = createDefaultSharedState();

    const action = userLoadInfoActionCreator({ fullyLoginned: true });

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      userState: userStates.FULLY_LOGINNED,
    });
  });

  it('handles showing message', () => {
    const sharedState = createDefaultSharedState();

    const message = 'Message';
    const action = showMessageActionCreator(message);

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      showMessage: true,
      messageColor: 'info',
      message,
    });
  });

  it('handles hiding message', () => {
    const sharedState = {
      ...createDefaultSharedState(),
      showMessage: true,
      messageColor: 'info',
      message: 'Message',
    };

    const action = hideMessageActionCreator();

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      showMessage: false,
    });
  });

  it('handles showing error message', () => {
    const sharedState = createDefaultSharedState();

    const message = 'Error Message';
    const action = showErrorActionCreator(message);

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      showMessage: true,
      messageColor: 'danger',
      message,
    });
  });

  it('handles turning on revoke lock', () => {
    const sharedState = createDefaultSharedState();

    const action = lockToggleActionCreator(LOCK_REVOKE, true);

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      revokeLoading: true,
    });
  });

  it('handles turning off revoke lock', () => {
    const sharedState = {
      ...createDefaultSharedState(),
      revokeLoading: true,
    };

    const action = lockToggleActionCreator(LOCK_REVOKE, false);

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      revokeLoading: false,
    });
  });

  it('handles turning on fetch data lock', () => {
    const sharedState = createDefaultSharedState();

    const action = lockToggleActionCreator(LOCK_START_LOADING_DATA, true);

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      fetchDataLoading: true,
    });
  });

  it('handles turning off fetch data lock', () => {
    const sharedState = {
      ...createDefaultSharedState(),
      fetchDataLoading: true,
    };

    const action = lockToggleActionCreator(LOCK_START_LOADING_DATA, false);

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      fetchDataLoading: false,
    });
  });

  it('handles revoking when user is not logginned', () => {
    const sharedState = createDefaultSharedState();

    const action = revokeActionCreator();

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).toBe(sharedState);
  });

  it('handles revoking when user is logginned', () => {
    const sharedState = {
      ...createDefaultSharedState(),
      userState: userStates.FULLY_LOGINNED,
    };

    const action = revokeActionCreator();

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).not.toBe(sharedState);
    expect(newSharedState).toEqual({
      ...sharedState,
      userState: userStates.NOT_LOGGINED,
      showMessage: true,
      messageColor: 'info',
      message: 'Your account have been revoked.',
    });
  });

  it('handles toggling unrelated lock', () => {
    const sharedState = createDefaultSharedState();

    const action = lockToggleActionCreator(LOCK_BROWSE_DEVIATIONS, true);

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).toBe(sharedState);
  });

  it('handles unrelated action', () => {
    const sharedState = createDefaultSharedState();

    const action = changeTitleActionCreator('Title');

    const newSharedState = sharedReducer(sharedState, action);

    expect(newSharedState).toBe(sharedState);
  });
});
