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
  thumbnail: {
    src: '',
    width: 0,
    height: 0,
  },
  description: '',
  nsfw: false,
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
 * Change form values reducer.
 *
 * @param {DeviationsDetailsChangeFormFieldValuesAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
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
const setId = action => ({
  id: action.id,
});

/**
 * @description
 * Load data for deviation details lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const loadDataLockToggle = action => ({
  detailsLoading: action.value,
});

/**
 * @description
 * Load metadata for deviation details lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const loadMetadataLockToggle = action => ({
  metadataLoading: action.value,
});

/**
 * @description
 * Load data for deviation details reducer.
 *
 * @param {DeviationDetailsState} deviationsDetailsState - Deviations details page state.
 * @param {DeviationsDetailsLoadDataAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const loadData = (deviationsDetailsState, action) => ({
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
 * Load metadata for deviation details reducer.
 *
 * @param {DeviationsDetailsLoadDataAction} action - The action.
 * @returns {DeviationDetailsState} New deviations details state.
 */
const loadMetadata = action => ({
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
      difference = setId(action);
      break;

    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_DEVIATION_DETAILS) {
        difference = loadDataLockToggle(action);
      }
      if (action.lock === LOCK_DEVIATION_DETAILS_METADATA) {
        difference = loadMetadataLockToggle(action);
      }
      break;

    case actions.DEVIATIONS_DETAILS_LOAD_DATA:
      difference = loadData(deviationsDetailsState, action);
      break;

    case actions.DEVIATIONS_DETAILS_LOAD_METADATA:
      difference = loadMetadata(action);
      break;

    default:
  }

  return difference !== null
    ? { ...deviationsDetailsState, ...difference }
    : deviationsDetailsState;
};
