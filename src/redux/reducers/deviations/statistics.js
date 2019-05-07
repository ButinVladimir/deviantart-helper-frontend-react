import * as actions from '../../actions';
import { LOCK_DEVIATIONS_STATISTICS } from '../../../consts/locks';
import filterAction from '../../../helpers/filter-action';

/**
 * @description
 * Clear loaded data reducer.
 *
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const clearLoadedData = () => ({
  deviations: [],
  metadata: null,
});

/**
 * @description
 * Change active tab reducer.
 *
 * @param {DeviationsStatisticsChangeTabAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changeTab = action => ({
  tab: action.tab,
});

const formFields = [
  'publishedTimeBegin',
  'publishedTimeEnd',
  'timestampBegin',
  'timestampEnd',
  'sortField',
  'sortOrder',
  'title',
  'nsfw',
  'filterByIds',
];

/**
 * @description
 * Change title value reducer.
 *
 * @param {DeviationsStatisticsChangeFormFieldValuesAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const changeFormFieldValues = action => ({
  showPagination: false,
  ...filterAction(action, formFields),
});

/**
 * @description
 * Toggle deviation selection reducer.
 *
 * @param {DeviationStatisticsState} deviationsStatisticsState - Deviations statistics page state.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const toggleDeviationsSelection = deviationsStatisticsState => ({
  showPagination: deviationsStatisticsState.filterByIds
    ? false
    : deviationsStatisticsState.showPagination,
});

/**
 * @description
 * Load page lock toggle reducer.
 *
 * @param {LockToggleAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const loadPageLockToggle = action => ({
  pageLoading: action.value,
});

/**
 * @description
 * Load page reducer.
 *
 * @param {DeviationsStatisticsLoadPageAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const loadPage = action => ({
  deviations: [...action.deviations],
  metadata: action.metadata ? { ...action.metadata } : null,
  page: action.page,
  pageCount: action.pageCount,
  showPagination: true,
});

/**
 * @description
 * Load metadata for deviation statistics reducer.
 *
 * @param {DeviationsStatisticsLoadMetadataAction} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
const loadMetadata = action => ({
  metadata: action.metadata ? { ...action.metadata } : null,
});


/**
 * @description
 * Deviations statistics page state reducer.
 *
 * @param {DeviationStatisticsState} deviationsStatisticsState - Deviations statistics page state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationStatisticsState} New deviations statistics state.
 */
export default (deviationsStatisticsState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.CLEAR_LOADED_DATA:
      difference = clearLoadedData();
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_TAB:
      difference = changeTab(action);
      break;

    case actions.DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES:
      difference = changeFormFieldValues(action);
      break;

    case actions.LOCK_TOGGLE:
      if (action.lock === LOCK_DEVIATIONS_STATISTICS) {
        difference = loadPageLockToggle(action);
      }
      break;

    case actions.DEVIATIONS_STATISTICS_LOAD_PAGE:
      difference = loadPage(action);
      break;

    case actions.DEVIATIONS_STATISTICS_LOAD_METADATA:
      difference = loadMetadata(action);
      break;

    case actions.DEVIATIONS_COMMON_TOGGLE_SELECTION:
      difference = toggleDeviationsSelection(deviationsStatisticsState);
      break;

    default:
  }

  return difference !== null
    ? Object.assign({}, deviationsStatisticsState, difference)
    : deviationsStatisticsState;
};
