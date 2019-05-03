import * as sort from '../../consts/sort';
import { SHOW_ALL } from '../../consts/nsfw-options';

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
 * Deviation preview object.
 *
 * @typedef {Object} DeviationPreview
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
 * State of deviations browse page.
 *
 * @typedef {Object} DeviationBrowseState
 * @property {boolean} page - Current page.
 * @property {string} sortField - Sort field value.
 * @property {number} sortOrder - Sort order value.
 * @property {string} title - Title value.
 * @property {string} publishedTimeBegin - Published time begin value.
 * @property {string} publishedTimeEnd - Published time end value.
 * @property {DeviationPreview[]} deviations - Loaded deviations.
 */

/**
 * @description
 * Creates default deviations browse state.
 *
 * @returns {DeviationBrowseState} Default state.
 */
export default () => ({
  page: 0,
  pageCount: 0,
  sortField: sort.FIELD_PUBLISHED_TIME,
  sortOrder: sort.ORDER_DESC,
  title: '',
  publishedTimeBegin: 0,
  publishedTimeEnd: 0,
  nsfw: SHOW_ALL,
  deviations: [],
  pageLoading: false,
  showPagination: false,
});
