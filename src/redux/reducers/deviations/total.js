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

    case actions.DEVIATIONS_TOTAL_CHANGE_FORM_FIELD_VALUES:
      difference = changeFormFieldValues(action);
      break;

    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_DEVIATIONS_TOTAL) {
        difference = loadDataLockToggle(action);
      }
      break;

    case actions.DEVIATIONS_TOTAL_LOAD_DATA:
      difference = loadData(action);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsTotalState, difference)
    : deviationsTotalState;
};
