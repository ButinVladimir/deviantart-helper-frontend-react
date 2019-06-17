import { ROUND_PERIOD_1_DAY } from '../../../consts/round-periods';
import { STATS } from '../../../consts/tabs';

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
 * @property {Object[]} metadata - The metadata sum.
 * @property {boolean} statsLoaded - Are total stats loaded.
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
  tab: STATS,
  views: 0,
  favourites: 0,
  comments: 0,
  downloads: 0,
  metadata: null,
  statsLoaded: false,
  totalLoading: false,
});
