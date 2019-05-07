import { connect } from 'react-redux';
import DeviationsStatisticsList from './DeviationsStatisticsList';
import deviationsCommonToggleSelectionActionCreator from '../../../redux/action-creators/deviations/common/toggle-selection';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  deviations: state.deviations.statistics.deviations,
  metadata: state.deviations.statistics.metadata,
  selectedIds: state.deviations.common.selectedIds,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  toggleSelectionHandler:
    id => dispatch(deviationsCommonToggleSelectionActionCreator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsStatisticsList);
