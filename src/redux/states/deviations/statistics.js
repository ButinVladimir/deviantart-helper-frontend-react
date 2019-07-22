import * as sort from '../../../consts/sort';
import { SHOW_ALL } from '../../../consts/nsfw-options';
import { LIST } from '../../../consts/tabs';
import { ROUND_PERIOD_1_DAY } from '../../../consts/round-periods';

/**
 * @global
 * @description
 * Deviation thumbnail image object.
 *
 * @typedef {Object} DeviationThumbnailImage
 * @property {string} src - The preview image source URL.
 * @property {number} width - The preview image width.
 * @property {number} height - The preview image height.
 */

/**
 * @description
 * Deviation statistic object.
 *
 * @typedef {Object} DeviationStatistic
 * @property {string} id - The ID.
 * @property {string} title - The title.
 * @property {string} url - The URL.
 * @property {DeviationThumbnailImage} thumbnail - The thumbnail.
 * @property {number} publishedTime - The published time.
 * @property {number} views - The views count.
 * @property {number} favourites - The favourites count.
 * @property {number} comments - The comments count.
 * @property {number} downloads - The downloads count.
 */

/**
 * @global
 * @description
 * State of deviations statistics page.
 *
 * @typedef {Object} DeviationStatisticsState
 * @property {number} page - Current page.
 * @property {number} pageCount - Pages count.
 * @property {string} sortField - Sort field value.
 * @property {number} sortOrder - Sort order value.
 * @property {string} title - Title value.
 * @property {number} publishedTimeBegin - Published time begin value.
 * @property {number} publishedTimeEnd - Published time end value.
 * @property {number} timestampBegin - The timestamp begin value.
 * @property {number} timestampEnd - The timestamp end value.
 * @property {DeviationStatistic[]} deviations - Loaded deviations.
 * @property {Object} metadata - The metadata.
 * @property {boolean} pageLoading - Is page loading.
 * @property {boolean} showPagination - Should pagination be shown.
 */

const timestampBegin = new Date().getTime() - ROUND_PERIOD_1_DAY;

/**
 * @description
 * Creates default deviations statistics state.
 *
 * @returns {DeviationStatisticsState} Default state.
 */
export default () => ({
  tab: LIST,
  page: 0,
  pageCount: 0,
  sortField: sort.FIELD_VIEWS,
  sortOrder: sort.ORDER_DESC,
  title: '',
  publishedTimeBegin: null,
  publishedTimeEnd: null,
  timestampBegin,
  timestampEnd: null,
  nsfw: SHOW_ALL,
  filterByIds: false,
  deviations: [],
  metadata: null,
  pageLoading: false,
  showPagination: false,
});
