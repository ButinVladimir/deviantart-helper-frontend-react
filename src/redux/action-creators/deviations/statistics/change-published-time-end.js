import { DEVIATIONS_STATISTICS_CHANGE_PUBLISHED_TIME_END } from '../../../actions';

/**
 * @global
 * @description
 * Action to change published time end value on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangePublishedTimeEndAction
 */

/**
 * @description
 * Creates action to change published time end value on deviations statistics page.
 *
 * @param {string} publishedTimeEnd - Published time end value.
 * @returns {DeviationsStatisticsChangePublishedTimeEndAction} Action.
 */
export default publishedTimeEnd => ({
  type: DEVIATIONS_STATISTICS_CHANGE_PUBLISHED_TIME_END,
  publishedTimeEnd,
});
