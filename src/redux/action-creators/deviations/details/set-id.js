import { DEVIATIONS_DETAILS_SET_ID } from '../../../actions';
import deviationsDetailsLoadData from './load-data';

/**
 * @global
 * @description
 * Action to set id value on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsSetIdAction
 */

/**
 * @description
 * Creates action to set id value on deviations details page.
 *
 * @param {string} id - Deviation id value.
 * @returns {DeviationsDetailsSetIdAction} Action.
 */
export const deviationsDetailsSetIdActionCreator = id => ({
  type: DEVIATIONS_DETAILS_SET_ID,
  id,
});

/**
 * @description
 * Sets deviation ID and loads details for it.
 *
 * @param {string} deviationDetailsId - Deviation id value.
 * @param {Config} config - The config.
 */
export default (deviationDetailsId, config) => (dispatch) => {
  dispatch(deviationsDetailsSetIdActionCreator(deviationDetailsId));
  dispatch(deviationsDetailsLoadData(config));
};
