import { CHART_VIEWS } from '../../consts/chart-types';
import { DESCRIPTION } from '../../consts/tabs';

/**
 * @global
 * @description
 * Deviation preview image object.
 *
 * @typedef {Object} DeviationPreviewImage
 * @property {string} src - The preview image source URL.
 * @property {number} width - The preview image width.
 * @property {number} height - The preview image height.
 */

/**
 * @global
 * @description
 * Deviation metadata object.
 *
 * @typedef {Object} DeviationMetadata
 * @property {number} timestamp - The timestamp.
 * @property {number} views - The views count.
 * @property {number} favourites - The favourites count.
 * @property {number} comments - The comments count.
 * @property {number} downloads - The downloads count.
 */

/**
 * @global
 * @description
 * State of deviations details page.
 *
 * @typedef {Object} DeviationDetailsState
 * @property {string} id - The ID.
 * @property {string} title - The title.
 * @property {string} url - The URL.
 * @property {number} publishedTime - The published time.
 * @property {DeviationPreviewImage} preview - The preview image.
 * @property {string} description - The description.
 * @property {number} views - The views count.
 * @property {number} favourites - The favourites count.
 * @property {number} comments - The comments count.
 * @property {number} downloads - The downloads count.
 * @property {string} timestampBegin - The timestamp begin value.
 * @property {string} timestampEnd - The timestamp end value.
 * @property {string} chartType - The chart type.
 * @property {DeviationMetadata[]} metadata - The metadata.
 */

/**
 * @description
 * Creates default deviations details state.
 *
 * @returns {DeviationDetailsState} Default state.
 */
export default () => ({
  tab: DESCRIPTION,
  id: '',
  title: '',
  url: '',
  publishedTime: 0,
  thumbnail: {
    src: '',
    height: 0,
    width: 0,
  },
  preview: {
    src: '',
    height: 0,
    width: 0,
  },
  description: '',
  views: 0,
  favourites: 0,
  comments: 0,
  downloads: 0,
  timestampBegin: '',
  timestampEnd: '',
  chartType: CHART_VIEWS,
  metadata: [],
  detailsLoading: false,
});
