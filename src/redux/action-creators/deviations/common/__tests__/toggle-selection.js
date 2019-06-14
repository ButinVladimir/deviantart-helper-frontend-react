import deviationsCommonToggleSelectionActionCreator from '../toggle-selection';
import { DEVIATIONS_COMMON_TOGGLE_SELECTION } from '../../../../actions';

describe('DeviationsCommonToggleSelection action creator', () => {
  it('can toggle selection', () => {
    const id = '12345';
    const action = deviationsCommonToggleSelectionActionCreator(id);

    expect(action).toEqual({
      type: DEVIATIONS_COMMON_TOGGLE_SELECTION,
      id,
    });
  });
});
