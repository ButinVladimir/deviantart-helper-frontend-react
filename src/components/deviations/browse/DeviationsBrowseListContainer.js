import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsBrowseList from './DeviationsBrowseList';
import { deviationsBrowseLoadCurrentPageActionCreator } from '../../../redux/action-creators/deviations/browse/load-page';
import deviationsCommonToggleSelectionActionCreator from '../../../redux/action-creators/deviations/common/toggle-selection';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  deviations: state.deviations.browse.deviations,
  pageLoading: state.deviations.browse.pageLoading,
  selectedIds: state.deviations.common.selectedIds,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The dispatch.
 * @param {Object} ownProps - The own component props.
 * @returns {Object} Props.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  preloadDeviationsHandler:
    () => dispatch(deviationsBrowseLoadCurrentPageActionCreator(ownProps.config)),
  toggleSelectionHandler:
    id => dispatch(deviationsCommonToggleSelectionActionCreator(id)),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowseList));
