import { connect } from 'react-redux';
import DeviationsBrowseList from './DeviationsBrowseList';
import deviationsBrowseLoadPageActionCreator from '../../../redux/action-creators/deviations/browse/load-page';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  deviations: state.deviations.browse.deviations,
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
  preloadDeviationsHandler: () => dispatch(deviationsBrowseLoadPageActionCreator(ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowseList);
