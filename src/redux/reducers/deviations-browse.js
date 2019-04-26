import * as actions from '../actions';
import filterAction from '../../helpers/filter-action';

const formFields = [
  'publishedTimeBegin',
  'publishedTimeEnd',
  'sortField',
  'sortOrder',
  'title',
];

/**
 * @description
 * Change title value reducer.
 *
 * @param {DeviationsBrowseChangeTitleAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const changeFormFieldValues = action => ({
  showPagination: false,
  ...filterAction(action, formFields),
});

/**
 * @description
 * Load page lock toggle reducer.
 *
 * @param {DeviationsBrowseLoadPageLockToggleAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const loadPageLockToggle = action => ({
  pageLoading: action.lock,
});

/**
 * @description
 * Load page reducer.
 *
 * @param {DeviationsBrowseLoadPageAction} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
const loadPage = action => ({
  deviations: Array.from(action.deviations),
  page: action.page,
  pageCount: action.pageCount,
  pageLoading: false,
  showPagination: true,
});

/**
 * @description
 * Deviations browse page state reducer.
 *
 * @param {DeviationBrowseState} deviationsBrowseState - Deviations browse page state.
 * @param {SharedState} sharedState - Shared state.
 * @param {Object} action - The action.
 * @returns {DeviationBrowseState} New deviations browse state.
 */
export default (deviationsBrowseState, sharedState, action) => {
  let difference = null;

  switch (action.type) {
    case actions.DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES:
      difference = changeFormFieldValues(action);
      break;

    case actions.DEVIATIONS_BROWSE_LOAD_PAGE_LOCK_TOGGLE:
      difference = loadPageLockToggle(action);
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
