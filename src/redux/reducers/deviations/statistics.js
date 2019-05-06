import * as actions from '../../actions';
import { LOCK_DEVIATIONS_STATISTICS } from '../../../consts/locks';

/**
 * @description
 * Clear loaded data reducer.
 *
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const clearLoadedData = () => ({
  deviations: [],
  metadata: [],
});

/**
 * @description
 * Change title value reducer.
 *
 * @param {DeviationsStatisticsChangeTitleAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changeTitle = action => ({
  title: action.title,
});

/**
 * @description
 * Change published time begin value reducer.
 *
 * @param {DeviationsStatisticsChangePublishedTimeBeginAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changePublishedTimeBegin = action => ({
  publishedTimeBegin: action.publishedTimeBegin,
});

/**
 * @description
 * Change published time end value reducer.
 *
 * @param {DeviationsStatisticsChangePublishedTimeEndAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changePublishedTimeEnd = action => ({
  publishedTimeEnd: action.publishedTimeEnd,
});

/**
 * @description
 * Change sort field value reducer.
 *
 * @param {DeviationsStatisticsChangeSortFieldAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changeSortField = action => ({
  sortField: action.sortField,
});

/**
 * @description
 * Change sort order value reducer.
 *
 * @param {DeviationsStatisticsChangeSortOrderAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changeSortOrder = action => ({
  sortOrder: action.sortOrder,
});

/**
 * @description
 * Change timestamp begin value reducer.
 *
 * @param {DeviationsStatisticsChangeTimestampBeginAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changeTimestampBegin = action => ({
  timestampBegin: action.timestampBegin,
});

/**
 * @description
 * Change timestamp end value reducer.
 *
 * @param {DeviationsStatisticsChangeTimestampEndAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changeTimestampEnd = action => ({
  timestampEnd: action.timestampEnd,
});

/**
 * @description
 * Load page lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations browse state.
 */
const loadPageLockToggle = action => ({
  pageLoading: action.value,
});

/**
 * @description
 * Change chart type value reducer.
 *
 * @param {DeviationsStatisticsChangeTimestampEndAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changeChartType = action => ({
  chartType: action.chartType,
});

/**
 * @description
 * Load page reducer.
 *
 * @param {DeviationsStatisticsLoadPageAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const loadPage = action => ({
  deviations: Array.from(action.deviations),
  metadata: Array.from(action.metadata),
  page: action.page,
  showPagination: true,
});

/**
 * @description
 * Deviations statistics page state reducer.
 *
 * @param {DeviationStatisticsState} deviationsStatisticsState - Deviations statistics page state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
export default (deviationsStatisticsState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.CLEAR_LOADED_DATA:
      difference = clearLoadedData();
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_TITLE:
      difference = changeTitle(action);
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_PUBLISHED_TIME_BEGIN:
      difference = changePublishedTimeBegin(action);
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_PUBLISHED_TIME_END:
      difference = changePublishedTimeEnd(action);
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_SORT_FIELD:
      difference = changeSortField(action);
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_SORT_ORDER:
      difference = changeSortOrder(action);
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_TIMESTAMP_BEGIN:
      difference = changeTimestampBegin(action);
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_TIMESTAMP_END:
      difference = changeTimestampEnd(action);
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_CHART_TYPE:
      difference = changeChartType(action);
      break;

    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_DEVIATIONS_STATISTICS) {
        difference = loadPageLockToggle(action);
      }
      break;

    case actions.DEVIATIONS_STATISTICS_LOAD_PAGE:
      difference = loadPage(action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsStatisticsState, difference)
    : deviationsStatisticsState;
};
