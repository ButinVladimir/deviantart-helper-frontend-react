import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsTotal from './DeviationsTotal';
import clearLoadedDataActionCreator from '../../../redux/action-creators/shared/clear-loaded-data';
import deviationsTotalLoadDataActionCreator from '../../../redux/action-creators/deviations/total/load-data';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  totalLoading: state.deviations.total.totalLoading,
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
  clearDataHandler: () => dispatch(clearLoadedDataActionCreator()),
  preloadStatisticsHandler: () => dispatch(deviationsTotalLoadDataActionCreator(ownProps.config)),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(DeviationsTotal));
