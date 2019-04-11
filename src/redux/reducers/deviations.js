import * as actions from '../actions';

/**
 * @description
 * Change title value reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsChangeTitleAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeTitle = (deviationsState, sharedState, action) => ({
  title: action.title,
});

/**
 * @description
 * Change published time begin value reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsChangePublishedTimeBeginAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changePublishedTimeBegin = (deviationsState, sharedState, action) => ({
  publishedTimeBegin: action.publishedTimeBegin,
});

/**
 * @description
 * Change published time end value reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsChangePublishedTimeEndAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changePublishedTimeEnd = (deviationsState, sharedState, action) => ({
  publishedTimeEnd: action.publishedTimeEnd,
});

/**
 * @description
 * Change sort field value reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsChangeSortFieldAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeSortField = (deviationsState, sharedState, action) => ({
  sortField: action.sortField,
});

/**
 * @description
 * Change sort order value reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsChangeSortOrderAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeSortOrder = (deviationsState, sharedState, action) => ({
  sortOrder: action.sortOrder,
});

/**
 * @description
 * Browse reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsBrowseAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const browse = (deviationsState, sharedState, action) => ({
  deviationsBrowse: Array.from(action.deviations),
});

/**
 * @description
 * Change browse page value reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsChangeBrowsePageAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeBrowsePage = (deviationsState, sharedState, action) => ({
  browsePage: action.page,
});

/**
 * @description
 * Deviations state reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
export default (deviationsState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.DEVIATIONS_CHANGE_TITLE:
      difference = changeTitle(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_CHANGE_PUBLISHED_TIME_BEGIN:
      difference = changePublishedTimeBegin(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_CHANGE_PUBLISHED_TIME_END:
      difference = changePublishedTimeEnd(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_CHANGE_SORT_FIELD:
      difference = changeSortField(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_CHANGE_SORT_ORDER:
      difference = changeSortOrder(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_BROWSE:
      difference = browse(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_CHANGE_BROWSE_PAGE:
      difference = changeBrowsePage(deviationsState, sharedState, action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsState, difference)
    : deviationsState;
};
