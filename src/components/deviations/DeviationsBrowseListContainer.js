import { connect } from 'react-redux';
import DeviationsBrowseList from './DeviationsBrowseList';
import deviationsBrowseActionCreator from '../../redux/action-creators/deviations/browse';

/**
 * @description
 * Maps Redux state to header props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  deviations: state.deviations.deviationsBrowse,
});

/**
 * @description
 * Maps Redux dispatch to header props.
 *
 * @param {Function} dispatch - The dispatch.
 * @param {Object} ownProps - The own component props.
 * @returns {Object} Props.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  preloadDeviationsHandler: () => dispatch(deviationsBrowseActionCreator(ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowseList);
