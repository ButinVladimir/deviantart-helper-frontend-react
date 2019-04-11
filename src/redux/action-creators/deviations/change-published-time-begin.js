import { DEVIATIONS_CHANGE_PUBLISHED_TIME_BEGIN } from '../../actions';

/**
 * @global
 * @description
 * Action to change published time begin value on deviations page.
 *
 * @typedef {Object} DeviationsChangePublishedTimeBeginAction
 */

/**
 * @description
 * Creates action to change published time begin value on deviations page.
 *
 * @param {string} publishedTimeBegin - Published time begin value.
 * @returns {DeviationsChangePublishedTimeBeginAction} Action.
 */
export default publishedTimeBegin => ({
  type: DEVIATIONS_CHANGE_PUBLISHED_TIME_BEGIN,
  publishedTimeBegin,
});
