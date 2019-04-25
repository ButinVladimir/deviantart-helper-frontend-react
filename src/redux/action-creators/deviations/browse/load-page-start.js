import { DEVIATIONS_BROWSE_LOAD_PAGE_START } from '../../../actions';

/**
 * @global
 * @description
 * Action to start loading page with deviations to browse.
 *
 * @typedef {Object} DeviationsBrowseLoadPageStartAction
 */

/**
 * @description
 * Creates action to start loading page with deviations to browse.
 *
 * @returns {DeviationsBrowseLoadPageStartAction} Action.
 */
export default () => ({
  type: DEVIATIONS_BROWSE_LOAD_PAGE_START,
});
