import * as actions from '../../actions';
import { LOCK_DEVIATION_DETAILS, LOCK_DEVIATION_DETAILS_METADATA } from '../../../consts/locks';
import filterAction from '../../../helpers/filter-action';

/**
 * @description
 * Clear loaded data reducer.
 *
 * @returns {DeviationDetailsState} New deviations details state.
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
  metadata: null,
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

const formFields = [
  'timestampBegin',
  'timestampEnd',
];

/**
 * @description
 * Change title value reducer.
 *
 * @param {DeviationsBrowseChangeTitleAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const changeFormFieldValues = action => ({
  ...filterAction(action, formFields),
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
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const detailsSetDataLockToggle = action => ({
  detailsLoading: action.value,
});

/**
 * @description
 * Set data for deviation details metadata lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const metadataSetDataLockToggle = action => ({
  metadataLoading: action.value,
});

/**
 * @description
 * Set data for deviation details reducer.
 *
 * @param {DeviationDetailsState} deviationsDetailsState - Deviations details page state.
 * @param {DeviationsDetailsSetDataAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const detailsSetData = (deviationsDetailsState, action) => ({
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
  nsfw: action.deviation.nsfw,
  views: action.deviation.views,
  favourites: action.deviation.favourites,
  comments: action.deviation.comments,
  downloads: action.deviation.downloads,
  metadata: action.metadata ? { [deviationsDetailsState.id]: action.metadata } : null,
});

/**
 * @description
 * Set metadata for deviation details reducer.
 *
 * @param {DeviationsDetailsSetDataAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const detailsSetMetadata = action => ({
  metadata: action.metadata ? { ...action.metadata } : null,
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

    case actions.DEVIATIONS_DETAILS_CHANGE_FORM_FIELD_VALUES:
      difference = changeFormFieldValues(action);
      break;

    case actions.DEVIATIONS_DETAILS_SET_ID:
      difference = detailsSetid(action);
      break;

    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_DEVIATION_DETAILS) {
        difference = detailsSetDataLockToggle(action);
      }
      if (action.lock === LOCK_DEVIATION_DETAILS_METADATA) {
        difference = metadataSetDataLockToggle(action);
      }
      break;

    case actions.DEVIATIONS_DETAILS_SET_DATA:
      difference = detailsSetData(deviationsDetailsState, action);
      break;

    case actions.DEVIATIONS_DETAILS_SET_METADATA:
      difference = detailsSetMetadata(action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsDetailsState, difference)
    : deviationsDetailsState;
};
