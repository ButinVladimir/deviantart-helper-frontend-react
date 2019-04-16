import * as actions from '../actions';

/**
 * @description
 * Change title value reducer.
 *
 * @param {DeviationsBrowseChangeTitleAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeTitle = action => ({
  title: action.title,
});

/**
 * @description
 * Change published time begin value reducer.
 *
 * @param {DeviationsBrowseChangePublishedTimeBeginAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changePublishedTimeBegin = action => ({
  publishedTimeBegin: action.publishedTimeBegin,
});

/**
 * @description
 * Change published time end value reducer.
 *
 * @param {DeviationsBrowseChangePublishedTimeEndAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changePublishedTimeEnd = action => ({
  publishedTimeEnd: action.publishedTimeEnd,
});

/**
 * @description
 * Change sort field value reducer.
 *
 * @param {DeviationsBrowseChangeSortFieldAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeSortField = action => ({
  sortField: action.sortField,
});

/**
 * @description
 * Change sort order value reducer.
 *
 * @param {DeviationsBrowseChangeSortOrderAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeSortOrder = action => ({
  sortOrder: action.sortOrder,
});

/**
 * @description
 * Load page reducer.
 *
 * @param {DeviationsBrowseLoadPageAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const loadPage = action => ({
  deviations: Array.from(action.deviations),
  page: action.page,
});

/**
 * @description
 * Deviations browse page state reducer.
 *
 * @param {DeviationBrowseState} deviationsBrowseState - Deviations browse page state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationsState} New deviations state.
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

    case actions.DEVIATIONS_BROWSE_LOAD_PAGE:
      difference = loadPage(action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsBrowseState, difference)
    : deviationsBrowseState;
};
