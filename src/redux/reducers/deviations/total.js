import * as actions from '../../actions';
import { LOCK_DEVIATIONS_TOTAL } from '../../../consts/locks';
import filterAction from '../../../helpers/filter-action';

/**
 * @description
 * Clear loaded data reducer.
 *
 * @returns {DeviationTotalState} New deviations total statistics state.
 */
const clearLoadedData = () => ({
  views: 0,
  favourites: 0,
  comments: 0,
  downloads: 0,
  metadata: null,
  statsLoaded: false,
});

/**
 * @description
 * Change active tab reducer.
 *
 * @param {DeviationsTotalChangeTabAction} action - The action.
 * @returns {DeviationTotalState} New deviations total statistics state.
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
 * @param {DeviationsTotalChangeFormFieldValuesAction} action - The action.
 * @returns {DeviationTotalState} New deviations total statistics state.
 */
const changeFormFieldValues = action => ({
  ...filterAction(action, formFields),
});

/**
 * @description
 * Start loading reducer.
 *
 * @returns {DeviationTotalState} New deviations total statistics state.
 */
const startLoading = () => ({
  metadata: null,
  statsLoaded: false,
});

/**
 * @description
 * Load data for deviation total statistics lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationTotalState} New deviations total statistics state.
 */
const loadDataLockToggle = action => ({
  totalLoading: action.value,
});

/**
 * @description
 * Load data for deviation total statistics reducer.
 *
 * @param {DeviationsTotalLoadDataAction} action - The action.
 * @returns {DeviationTotalState} New deviations total statistics state.
 */
const loadData = action => ({
  views: action.views,
  favourites: action.favourites,
  comments: action.comments,
  downloads: action.downloads,
  statsLoaded: true,
});

/**
 * @description
 * Load metadata for deviation total statistics reducer.
 *
 * @param {DeviationsTotalLoadDataAction} action - The action.
 * @returns {DeviationTotalState} New deviations total statistics state.
 */
const loadMetadata = action => ({
  metadata: [...action.metadata],
});

/**
 * @description
 * Deviations total statistics page state reducer.
 *
 * @param {DeviationTotalState} deviationsTotalState - Deviations total statistics page state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationTotalState} New deviations total statistics state.
 */
export default (deviationsTotalState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.CLEAR_LOADED_DATA:
      difference = clearLoadedData();
      break;

    case actions.DEVIATIONS_TOTAL_CHANGE_TAB:
      difference = changeTab(action);
      break;

    case actions.DEVIATIONS_TOTAL_CHANGE_FORM_FIELD_VALUES:
      difference = changeFormFieldValues(action);
      break;

    case actions.DEVIATIONS_TOTAL_START_LOADING:
      difference = startLoading();
      break;

    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_DEVIATIONS_TOTAL) {
        difference = loadDataLockToggle(action);
      }
      break;

    case actions.DEVIATIONS_TOTAL_LOAD_DATA:
      difference = loadData(action);
      break;

    case actions.DEVIATIONS_TOTAL_LOAD_METADATA:
      difference = loadMetadata(action);
      break;

    default:
  }

  return difference !== null
    ? { ...deviationsTotalState, ...difference }
    : deviationsTotalState;
};
