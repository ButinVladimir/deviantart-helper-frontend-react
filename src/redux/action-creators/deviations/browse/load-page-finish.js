import { DEVIATIONS_BROWSE_LOAD_PAGE_FINISH } from '../../../actions';

/**
 * @global
 * @description
 * Action to finish loading page with deviations to browse.
 *
 * @typedef {Object} DeviationsBrowseLoadPageFinishAction
 */

/**
 * @description
 * Creates action to finish loading page with deviations to browse.
 *
 * @returns {DeviationsBrowseLoadPageFinishAction} Action.
 */
export default () => ({
  type: DEVIATIONS_BROWSE_LOAD_PAGE_FINISH,
});
