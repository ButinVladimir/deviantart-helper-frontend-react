import * as actions from '../actions';

/**
 * @description
 * Change title value reducer.
 *
 * @param {DeviationsBrowseChangeTitleAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const changeTitle = action => ({
  title: action.title,
  showPagination: false,
});

/**
 * @description
 * Change published time begin value reducer.
 *
 * @param {DeviationsBrowseChangePublishedTimeBeginAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const changePublishedTimeBegin = action => ({
  publishedTimeBegin: action.publishedTimeBegin,
  showPagination: false,
});

/**
 * @description
 * Change published time end value reducer.
 *
 * @param {DeviationsBrowseChangePublishedTimeEndAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const changePublishedTimeEnd = action => ({
  publishedTimeEnd: action.publishedTimeEnd,
  showPagination: false,
});

/**
 * @description
 * Change sort field value reducer.
 *
 * @param {DeviationsBrowseChangeSortFieldAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const changeSortField = action => ({
  sortField: action.sortField,
  showPagination: false,
});

/**
 * @description
 * Change sort order value reducer.
 *
 * @param {DeviationsBrowseChangeSortOrderAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const changeSortOrder = action => ({
  sortOrder: action.sortOrder,
  showPagination: false,
});

/**
 * @description
 * Load page start reducer.
 *
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const loadPageStart = () => ({
  pageLoading: true,
});

/**
 * @description
 * Load page finish reducer.
 *
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const loadPageFinish = () => ({
  pageLoading: false,
});

/**
 * @description
 * Load page reducer.
 *
 * @param {DeviationsBrowseLoadPageAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const loadPage = action => ({
  deviations: Array.from(action.deviations),
  page: action.page,
  pageCount: action.pageCount,
  pageLoading: false,
  showPagination: true,
});

/**
 * @description
 * Deviations browse page state reducer.
 *
 * @param {DeviationBrowseState} deviationsBrowseState - Deviations browse page state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
export default (deviationsBrowseState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.DEVIATIONS_BROWSE_CHANGE_TITLE:
      difference = changeTitle(action);
      break;

    case actions.DEVIATIONS_BROWSE_CHANGE_PUBLISHED_TIME_BEGIN:
      difference = changePublishedTimeBegin(action);
      break;

    case actions.DEVIATIONS_BROWSE_CHANGE_PUBLISHED_TIME_END:
      difference = changePublishedTimeEnd(action);
      break;

    case actions.DEVIATIONS_BROWSE_CHANGE_SORT_FIELD:
      difference = changeSortField(action);
      break;

    case actions.DEVIATIONS_BROWSE_CHANGE_SORT_ORDER:
      difference = changeSortOrder(action);
      break;

    case actions.DEVIATIONS_BROWSE_LOAD_PAGE_START:
      difference = loadPageStart();
      break;

    case actions.DEVIATIONS_BROWSE_LOAD_PAGE_FINISH:
      difference = loadPageFinish();
      break;

    case actions.DEVIATIONS_BROWSE_LOAD_PAGE:
      difference = loadPage(action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsBrowseState, difference)
    : deviationsBrowseState;
};
