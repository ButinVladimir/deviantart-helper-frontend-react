import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsStatistics from './DeviationsStatistics';
import clearLoadedDataActionCreator from '../../../redux/action-creators/shared/clear-loaded-data';
import deviationsStatisticsChangeTabActionCreator from '../../../redux/action-creators/deviations/statistics/change-tab';
import { deviationsStatisticsLoadCurrentPageActionCreator } from '../../../redux/action-creators/deviations/statistics/load-page';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  tab: state.deviations.statistics.tab,
  pageLoading: state.deviations.statistics.pageLoading,
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
  changeTabHandler: tab => () => {
    dispatch(deviationsStatisticsChangeTabActionCreator(tab, ownProps.config));
  },
  preloadDeviationsHandler:
    () => dispatch(deviationsStatisticsLoadCurrentPageActionCreator(ownProps.config)),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(DeviationsStatistics));
