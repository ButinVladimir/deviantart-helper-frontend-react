import { DEVIATIONS_STATISTICS_CHANGE_TITLE } from '../../../actions';

/**
 * @global
 * @description
 * Action to change title value on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangeTitleAction
 */

/**
 * @description
 * Creates action to change title value on deviations statistics page.
 *
 * @param {string} title - Title value.
 * @returns {DeviationsStatisticsChangeTitleAction} Action.
 */
export default title => ({
  type: DEVIATIONS_STATISTICS_CHANGE_TITLE,
  title,
});
