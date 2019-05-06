import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsStatisticsData from './DeviationsStatisticsData';
import deviationsStatisticsLoadPageActionCreator from '../../../redux/action-creators/deviations/statistics/load-page';

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
    () => dispatch(deviationsStatisticsLoadPageActionCreator(ownProps.config)),
});

export default consumeConfig(
  connect(mapStateToProps, mapDispatchToProps)(DeviationsStatisticsData),
);
