import { DEVIATIONS_STATISTICS_CHANGE_PUBLISHED_TIME_BEGIN } from '../../../actions';

/**
 * @global
 * @description
 * Action to change published time begin value on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangePublishedTimeBeginAction
 */

/**
 * @description
 * Creates action to change published time begin value on deviations statistics page.
 *
 * @param {string} publishedTimeBegin - Published time begin value.
 * @returns {DeviationsStatisticsChangePublishedTimeBeginAction} Action.
 */
export default publishedTimeBegin => ({
  type: DEVIATIONS_STATISTICS_CHANGE_PUBLISHED_TIME_BEGIN,
  publishedTimeBegin,
});
