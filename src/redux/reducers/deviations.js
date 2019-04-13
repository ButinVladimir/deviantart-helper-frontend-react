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
 * Change timestamp begin value reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsChangeSortOrderAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeTimestampBegin = (deviationsState, sharedState, action) => ({
  timestampBegin: action.timestampBegin,
});

/**
 * @description
 * Change timestamp end value reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsChangeSortOrderAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const changeTimestampEnd = (deviationsState, sharedState, action) => ({
  timestampEnd: action.timestampEnd,
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
  pageBrowse: action.page,
});

/**
 * @description
 * Set id for deviation details reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsDetailsSetIdAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const detailsSetid = (deviationsState, sharedState, action) => ({
  deviationDetailsId: action.deviationDetailsId,
});

/**
 * @description
 * Set data for deviation details reducer.
 *
 * @param {DeviationsState} deviationsState - Deviations state.
 * @param {SharedState} sharedState - Shared state.
 * @param {DeviationsDetailsSetIdAction} action - The action.
 * @returns {DeviationsState} New deviations state.
 */
const detailsSetData = (deviationsState, sharedState, action) => ({
  deviationDetails: Object.assign({}, deviationsState.deviationDetails, action.deviationDetails),
  deviationDetailsMetadata: [].concat(action.deviationDetailsMetadata),
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

    case actions.DEVIATIONS_CHANGE_TIMESTAMP_BEGIN:
      difference = changeTimestampBegin(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_CHANGE_TIMESTAMP_END:
      difference = changeTimestampEnd(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_BROWSE:
      difference = browse(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_DETAILS_SET_ID:
      difference = detailsSetid(deviationsState, sharedState, action);
      break;

    case actions.DEVIATIONS_DETAILS_SET_DATA:
      difference = detailsSetData(deviationsState, sharedState, action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsState, difference)
    : deviationsState;
};
