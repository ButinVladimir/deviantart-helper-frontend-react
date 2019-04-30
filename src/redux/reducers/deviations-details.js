import * as actions from '../actions';

/**
 * @description
 * Clear loaded data reducer.
 *
 * @returns {DeviationDetailsState} New deviations browse state.
 */
const clearLoadedData = () => ({
  id: '',
  title: '',
  url: '',
  publishedTime: 0,
  preview: {
    src: '',
    width: 0,
    height: 0,
  },
  description: '',
  views: 0,
  favourites: 0,
  comments: 0,
  downloads: 0,
  metadata: [],
});

/**
 * @description
 * Change active tab reducer.
 *
 * @param {DeviationsDetailsChangeTabAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const changeTab = action => ({
  tab: action.tab,
});

/**
 * @description
 * Change timestamp begin value reducer.
 *
 * @param {DeviationsDetailsChangeTimestampBeginAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const changeTimestampBegin = action => ({
  timestampBegin: action.timestampBegin,
});

/**
 * @description
 * Change timestamp end value reducer.
 *
 * @param {DeviationsDetailsChangeTimestampEndAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const changeTimestampEnd = action => ({
  timestampEnd: action.timestampEnd,
});

/**
 * @description
 * Change chart type value reducer.
 *
 * @param {DeviationsDetailsChangeTimestampEndAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const changeChartType = action => ({
  chartType: action.chartType,
});

/**
 * @description
 * Set id for deviation details reducer.
 *
 * @param {DeviationsDetailsSetIdAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const detailsSetid = action => ({
  id: action.id,
});

/**
 * @description
 * Set data for deviation details lock toggle reducer.
 *
 * @param {DeviationsDetailsSetDataLockToggleAction} action - The action.
 * @returns {DeviationDetailsState} New deviations browse state.
 */
const detailsSetDataLockToggle = action => ({
  detailsLoading: action.lock,
});

/**
 * @description
 * Set data for deviation details reducer.
 *
 * @param {DeviationsDetailsSetDataAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const detailsSetData = action => ({
  title: action.deviation.title,
  url: action.deviation.url,
  publishedTime: action.deviation.publishedTime,
  thumbnail: {
    src: action.deviation.thumbnail.src,
    width: action.deviation.thumbnail.width,
    height: action.deviation.thumbnail.height,
  },
  preview: {
    src: action.deviation.preview.src,
    width: action.deviation.preview.width,
    height: action.deviation.preview.height,
  },
  description: action.deviation.description,
  views: action.deviation.views,
  favourites: action.deviation.favourites,
  comments: action.deviation.comments,
  downloads: action.deviation.downloads,
  metadata: action.metadata.concat(),
  detailsLoading: false,
});

/**
 * @description
 * Deviations details page state reducer.
 *
 * @param {DeviationDetailsState} deviationsDetailsState - Deviations details page state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
export default (deviationsDetailsState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.CLEAR_LOADED_DATA:
      difference = clearLoadedData();
      break;

    case actions.DEVIATIONS_DETAILS_CHANGE_TAB:
      difference = changeTab(action);
      break;

    case actions.DEVIATIONS_DETAILS_CHANGE_TIMESTAMP_BEGIN:
      difference = changeTimestampBegin(action);
      break;

    case actions.DEVIATIONS_DETAILS_CHANGE_TIMESTAMP_END:
      difference = changeTimestampEnd(action);
      break;

    case actions.DEVIATIONS_DETAILS_CHANGE_CHART_TYPE:
      difference = changeChartType(action);
      break;

    case actions.DEVIATIONS_DETAILS_SET_ID:
      difference = detailsSetid(action);
      break;

    case actions.DEVIATIONS_DETAILS_SET_DATA_LOCK_TOGGLE:
      difference = detailsSetDataLockToggle(action);
      break;

    case actions.DEVIATIONS_DETAILS_SET_DATA:
      difference = detailsSetData(action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsDetailsState, difference)
    : deviationsDetailsState;
};
