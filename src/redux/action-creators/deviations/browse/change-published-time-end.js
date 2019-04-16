import { DEVIATIONS_BROWSE_CHANGE_PUBLISHED_TIME_END } from '../../../actions';

/**
 * @global
 * @description
 * Action to change published time end value on deviations browse page.
 *
 * @typedef {Object} DeviationsBrowseChangePublishedTimeEndAction
 */

/**
 * @description
 * Creates action to change published time end value on deviations browse page.
 *
 * @param {string} publishedTimeEnd - Published time end value.
 * @returns {DeviationsBrowseChangePublishedTimeEndAction} Action.
 */
export default publishedTimeEnd => ({
  type: DEVIATIONS_BROWSE_CHANGE_PUBLISHED_TIME_END,
  publishedTimeEnd,
});
