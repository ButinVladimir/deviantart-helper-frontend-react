import { DEVIATIONS_BROWSE_CHANGE_PUBLISHED_TIME_BEGIN } from '../../../actions';

/**
 * @global
 * @description
 * Action to change published time begin value on deviations browse page.
 *
 * @typedef {Object} DeviationsBrowseChangePublishedTimeBeginAction
 */

/**
 * @description
 * Creates action to change published time begin value on deviations browse page.
 *
 * @param {string} publishedTimeBegin - Published time begin value.
 * @returns {DeviationsBrowseChangePublishedTimeBeginAction} Action.
 */
export default publishedTimeBegin => ({
  type: DEVIATIONS_BROWSE_CHANGE_PUBLISHED_TIME_BEGIN,
  publishedTimeBegin,
});
