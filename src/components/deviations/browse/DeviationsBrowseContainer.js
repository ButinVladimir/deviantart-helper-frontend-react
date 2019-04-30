import { connect } from 'react-redux';
import clearLoadedDataActionCreator from '../../../redux/action-creators/shared/clear-loaded-data';
import DeviationsBrowse from './DeviationsBrowse';

/**
 * @description
 * Maps Redux state to props.
 *
 * @returns {Object} Props.
 */
const mapStateToProps = () => ({
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  clearDataHander: () => dispatch(clearLoadedDataActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowse);
