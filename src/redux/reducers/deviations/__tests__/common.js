import deviationsCommonReducer from '../common';
import createDefaultSharedState from '../../../states/shared';
import createDefaultDeviationsCommonState from '../../../states/deviations/common';
import deviationsToggleSelectionActionCreator from '../../../action-creators/deviations/common/toggle-selection';
import revokeActionCreator from '../../../action-creators/shared/revoke';

describe('Deviations chart reducer', () => {
  it('handles selecting deviation by id', () => {
    const sharedState = createDefaultSharedState();
    const selectedIds = ['Deviation1', 'Deviation2'];
    const deviationsCommonState = {
      ...createDefaultDeviationsCommonState(),
      selectedIds,
    };

    const newId = 'NewDeviationId';
    const action = deviationsToggleSelectionActionCreator(newId);

    const newDeviationsChartState = deviationsCommonReducer(
      deviationsCommonState,
      sharedState,
      action,
    );

    expect(newDeviationsChartState).not.toBe(deviationsCommonState);
    expect(newDeviationsChartState).toEqual({
      ...deviationsCommonState,
      selectedIds: selectedIds.concat(newId),
    });
  });

  it('handles deselecting deviation by id', () => {
    const sharedState = createDefaultSharedState();
    const existingId = 'Deviation3';
    const selectedIds = ['Deviation1', 'Deviation2', existingId];
    const deviationsCommonState = {
      ...createDefaultDeviationsCommonState(),
      selectedIds,
    };

    const action = deviationsToggleSelectionActionCreator(existingId);

    const newDeviationsChartState = deviationsCommonReducer(
      deviationsCommonState,
      sharedState,
      action,
    );

    expect(newDeviationsChartState).not.toBe(deviationsCommonState);
    expect(newDeviationsChartState).toEqual({
      ...deviationsCommonState,
      selectedIds: selectedIds.filter(id => id !== existingId),
    });
  });

  it('handles unrelated action', () => {
    const sharedState = createDefaultSharedState();
    const deviationsCommonState = createDefaultDeviationsCommonState();

    const action = revokeActionCreator();

    const newDeviationsChartState = deviationsCommonReducer(
      deviationsCommonState,
      sharedState,
      action,
    );

    expect(newDeviationsChartState).toBe(deviationsCommonState);
  });
});
