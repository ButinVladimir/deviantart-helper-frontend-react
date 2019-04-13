import * as sort from '../../consts/sort';

/**
 * @global
 * @description
 * State of deviations page.
 *
 * @typedef {Object} DeviationState
 * @property {boolean} page - Current page.
 * @property {boolean} sortField - Sort field value.
 * @property {string} sortOrder - Sort order value.
 * @property {boolean} title - Title value.
 * @property {string} publishedTimeBegin - Published time begin value.
 * @property {boolean} publishedTimeEnd - Published time end value.
 * @property {any[]} deviationsBrowse - Deviations to browse.
 * @property {Object} deviationDetails - Deviation details.
 */

const date = new Date();
date.setDate(date.getDate() - 5);

/**
 * @description
 * Creates default shared state.
 *
 * @returns {DeviationState} Default state.
 */
export default () => ({
  pageBrowse: 0,
  sortField: sort.FIELD_PUBLISHED_TIME,
  sortOrder: sort.ORDER_DESC,
  title: '',
  publishedTimeBegin: '',
  publishedTimeEnd: '',
  timestampBegin: date.getTime(),
  timestampEnd: '',
  deviationsBrowse: [],
  deviationDetailsId: '',
  deviationDetails: {
    title: '',
    url: '',
    publishedTime: 0,
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
  },
  deviationDetailsMetadata: [],
});
