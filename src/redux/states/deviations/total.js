import { ROUND_PERIOD_1_DAY } from '../../../consts/round-periods';

/**
 * @global
 * @description
 * State of deviations total statistics page.
 *
 * @typedef {Object} DeviationTotalState
 * @property {number} timestampBegin - The timestamp begin value.
 * @property {number} timestampEnd - The timestamp end value.
 * @property {number} views - The views count.
 * @property {number} favourites - The favourites count.
 * @property {number} comments - The comments count.
 * @property {number} downloads - The downloads count.
 * @property {boolean} totalLoading - Is total statistics loading.
 */

const timestampBegin = new Date().getTime() - ROUND_PERIOD_1_DAY;

/**
 * @description
 * Creates default deviations total statistics state.
 *
 * @returns {DeviationTotalState} Default state.
 */
export default () => ({
  timestampBegin,
  timestampEnd: 0,
  views: 0,
  favourites: 0,
  comments: 0,
  downloads: 0,
  totalLoading: false,
});
