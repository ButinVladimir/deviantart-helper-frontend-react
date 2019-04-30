import { CLEAR_LOADED_DATA } from '../../actions';

/**
 * @global
 * @description
 * Action to clear loaded data.
 *
 * @typedef {Object} ClearLoadedDataAction
 */

/**
 * @description
 * Creates action to clear loaded data.
 *
 * @returns {ClearLoadedDataAction} Action.
 */
export default () => ({
  type: CLEAR_LOADED_DATA,
});
