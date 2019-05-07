import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import * as deviationsStatisticsForm from '../../../redux/action-creators/deviations/statistics/change-form-field-values';
import deviationsStatisticsLoadPageActionCreator, { deviationsStatisticsLoadFirstPageActionCreator } from '../../../redux/action-creators/deviations/statistics/load-page';
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
  pageCount: state.deviations.statistics.pageCount,
  sortField: state.deviations.statistics.sortField,
  sortOrder: state.deviations.statistics.sortOrder,
  title: state.deviations.statistics.title,
  publishedTimeBegin: state.deviations.statistics.publishedTimeBegin,
  publishedTimeEnd: state.deviations.statistics.publishedTimeEnd,
  timestampBegin: state.deviations.statistics.timestampBegin,
  timestampEnd: state.deviations.statistics.timestampEnd,
  nsfw: state.deviations.statistics.nsfw,
  filterByIds: state.deviations.statistics.filterByIds,
  pageLoading: state.deviations.statistics.pageLoading,
  showPagination: state.deviations.statistics.showPagination,
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
  titleChangeHandler:
    e => dispatch(deviationsStatisticsForm.changeTitleActionCreator(e.target.value)),
  publishedTimeBeginChangeHandler:
    value => dispatch(deviationsStatisticsForm.changePublishedTimeBeginActionCreator(value)),
  publishedTimeEndChangeHandler:
    value => dispatch(deviationsStatisticsForm.changePublishedTimeEndActionCreator(value)),
  sortFieldChangeHandler:
    e => dispatch(deviationsStatisticsForm.changeSortFieldActionCreator(e.target.value)),
  sortOrderChangeHandler:
    e => dispatch(deviationsStatisticsForm.changeSortOrderActionCreator(e.target.value)),
  timestampBeginChangeHandler:
    value => dispatch(deviationsStatisticsForm.changeTimestampBeginActionCreator(value)),
  timestampEndChangeHandler:
    value => dispatch(deviationsStatisticsForm.changeTimestampEndActionCreator(value)),
  nsfwChangeHandler:
    e => dispatch(deviationsStatisticsForm.changeNsfwActionCreator(e.target.value)),
  filterByIdsChangeHandler:
    e => dispatch(deviationsStatisticsForm.changeFilterByIdsActionCreator(e.target.checked)),
  submitHandler: () => dispatch(deviationsStatisticsLoadFirstPageActionCreator(ownProps.config)),
  // Pagination in Bulma starts from 1 while pagination on backend start from 0.
  loadPageHandler:
    page => dispatch(deviationsStatisticsLoadPageActionCreator(page - 1, ownProps.config)),
});

export default consumeConfig(
  connect(mapStateToProps, mapDispatchToProps)(DeviationsStatisticsForm),
);
