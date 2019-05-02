import { connect } from 'react-redux';
import DeviationsStatisticsData from './DeviationsStatisticsData';
import deviationsStatisticsLoadPageActionCreator from '../../../redux/action-creators/deviations/statistics/load-page';
import deviationsStatisticsChangeDataSetActionCreator from '../../../redux/action-creators/deviations/statistics/change-chart-type';

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
  dataSet: state.deviations.statistics.dataSet,
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
  dataSetChangeHandler:
    e => dispatch(deviationsStatisticsChangeDataSetActionCreator(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsStatisticsData);
