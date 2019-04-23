import * as actions from '../actions';

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
 * Set data for deviation details reducer.
 *
 * @param {DeviationsDetailsSetDataAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const detailsSetData = action => ({
  title: action.deviation.title,
  url: action.deviation.url,
  publishedTime: action.deviation.publishedTime,
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

    case actions.DEVIATIONS_DETAILS_SET_DATA:
      difference = detailsSetData(action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsDetailsState, difference)
    : deviationsDetailsState;
};
