import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsTotal from './DeviationsTotal';
import clearLoadedDataActionCreator from '../../../redux/action-creators/shared/clear-loaded-data';
import deviationsTotalStartLoading from '../../../redux/action-creators/deviations/total/start-loading';
import deviationsTotalChangeTab from '../../../redux/action-creators/deviations/total/change-tab';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  tab: state.deviations.total.tab,
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
  changeTabHandler: tab => () => dispatch(deviationsTotalChangeTab(tab, ownProps.config)),
  preloadStatisticsHandler: () => dispatch(
    deviationsTotalStartLoading(ownProps.config),
  ),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(DeviationsTotal));
