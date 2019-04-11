import { DEVIATIONS_CHANGE_PUBLISHED_TIME_END } from '../../actions';

/**
 * @global
 * @description
 * Action to change published time end value on deviations page.
 *
 * @typedef {Object} DeviationsChangePublishedTimeEndAction
 */

/**
 * @description
 * Creates action to change published time end value on deviations page.
 *
 * @param {string} publishedTimeEnd - Published time end value.
 * @returns {DeviationsChangePublishedTimeEndAction} Action.
 */
export default publishedTimeEnd => ({
  type: DEVIATIONS_CHANGE_PUBLISHED_TIME_END,
  publishedTimeEnd,
});
