import * as sort from '../../consts/sort';

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
 * Deviation metadata object.
 *
 * @typedef {Object} DeviationMetadata
 * @property {string} deviationId - The deviation ID.
 * @property {number} timestamp - The timestamp.
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
 * @property {boolean} page - Current page.
 * @property {string} sortField - Sort field value.
 * @property {number} sortOrder - Sort order value.
 * @property {string} title - Title value.
 * @property {string} publishedTimeBegin - Published time begin value.
 * @property {string} publishedTimeEnd - Published time end value.
 * @property {string} timestampBegin - The timestamp begin value.
 * @property {string} timestampEnd - The timestamp end value.
 * @property {DeviationStatistic[]} deviations - Loaded deviations.
 * @property {DeviationMetadata[]} metadata - The metadata.
 * @property {boolean} pageLoading - Is page loading.
 * @property {boolean} showPagination - Should pagination be shown.
 */

const timestampBeginDate = new Date();
timestampBeginDate.setDate(timestampBeginDate.getDate() - 2);

/**
 * @description
 * Creates default deviations statistics state.
 *
 * @returns {DeviationStatisticsState} Default state.
 */
export default () => ({
  page: 0,
  sortField: sort.FIELD_VIEWS,
  sortOrder: sort.ORDER_DESC,
  title: '',
  publishedTimeBegin: '',
  publishedTimeEnd: '',
  timestampBegin: timestampBeginDate.getTime().toString(),
  timestampEnd: '',
  deviations: [],
  metadata: [],
  pageLoading: false,
  showPagination: false,
});
