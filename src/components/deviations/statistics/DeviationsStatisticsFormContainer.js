import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import deviationsStatisticsChangeTitleActionCreator from '../../../redux/action-creators/deviations/statistics/change-title';
import deviationsStatisticsChangePublishedTimeBeginActionCreator from '../../../redux/action-creators/deviations/statistics/change-published-time-begin';
import deviationsStatisticsChangePublishedTimeEndActionCreator from '../../../redux/action-creators/deviations/statistics/change-published-time-end';
import deviationsStatisticsChangeSortFieldActionCreator from '../../../redux/action-creators/deviations/statistics/change-sort-field';
import deviationsStatisticsChangeSortOrderActionCreator from '../../../redux/action-creators/deviations/statistics/change-sort-order';
import deviationsStatisticsChangeTimestampBeginActionCreator from '../../../redux/action-creators/deviations/statistics/change-timestamp-begin';
import deviationsStatisticsChangeTimestampEndActionCreator from '../../../redux/action-creators/deviations/statistics/change-timestamp-end';
import deviationsStatisticsLoadPageActionCreator from '../../../redux/action-creators/deviations/statistics/load-page';
import deviationsStatisticsPrevPageActionCreator from '../../../redux/action-creators/deviations/statistics/prev-page';
import deviationsStatisticsNextPageActionCreator from '../../../redux/action-creators/deviations/statistics/next-page';
import DeviationsStatisticsForm from './DeviationsStatisticsForm';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  page: state.deviations.statistics.page,
  sortField: state.deviations.statistics.sortField,
  sortOrder: state.deviations.statistics.sortOrder,
  title: state.deviations.statistics.title,
  publishedTimeBegin: state.deviations.statistics.publishedTimeBegin,
  publishedTimeEnd: state.deviations.statistics.publishedTimeEnd,
  timestampBegin: state.deviations.statistics.timestampBegin,
  timestampEnd: state.deviations.statistics.timestampEnd,
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
  titleChangeHandler: e => dispatch(deviationsStatisticsChangeTitleActionCreator(e.target.value)),
  publishedTimeBeginChangeHandler:
    e => dispatch(deviationsStatisticsChangePublishedTimeBeginActionCreator(e.target.value)),
  publishedTimeEndChangeHandler:
    e => dispatch(deviationsStatisticsChangePublishedTimeEndActionCreator(e.target.value)),
  sortFieldChangeHandler:
    e => dispatch(deviationsStatisticsChangeSortFieldActionCreator(e.target.value)),
  sortOrderChangeHandler:
    e => dispatch(deviationsStatisticsChangeSortOrderActionCreator(e.target.value)),
  timestampBeginChangeHandler:
    e => dispatch(deviationsStatisticsChangeTimestampBeginActionCreator(e.target.value)),
  timestampEndChangeHandler:
    e => dispatch(deviationsStatisticsChangeTimestampEndActionCreator(e.target.value)),
  submitHandler: () => dispatch(deviationsStatisticsLoadPageActionCreator(ownProps.config)),
  prevPageHandler: () => dispatch(deviationsStatisticsPrevPageActionCreator(ownProps.config)),
  nextPageHandler: () => dispatch(deviationsStatisticsNextPageActionCreator(ownProps.config)),
});

export default consumeConfig(
  connect(mapStateToProps, mapDispatchToProps)(DeviationsStatisticsForm),
);
