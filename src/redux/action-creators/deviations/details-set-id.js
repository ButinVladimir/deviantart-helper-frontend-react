import { DEVIATIONS_DETAILS_SET_ID } from '../../actions';
import deviationsDetailsSetDataCreator from './details-set-data';

/**
 * @global
 * @description
 * Action to set id value on deviations details page.
 *
 * @typedef {Object} DeviationsDetailsSetIdAction
 */

/**
 * @description
 * Creates action to change sort field value on deviations page.
 *
 * @param {string} deviationDetailsId - Deviation id value.
 * @returns {DeviationsDetailsSetIdAction} Action.
 */
const deviationDetailsSetIdActionCreator = deviationDetailsId => ({
  type: DEVIATIONS_DETAILS_SET_ID,
  deviationDetailsId,
});

/**
 * @description
 * Sets deviation ID and loads details for it.
 *
 * @param {string} deviationDetailsId - Deviation id value.
 * @param {Config} config - The config.
 */
export default (deviationDetailsId, config) => (dispatch) => {
  dispatch(deviationDetailsSetIdActionCreator(deviationDetailsId));
  dispatch(deviationsDetailsSetDataCreator(config));
};
