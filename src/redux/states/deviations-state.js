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
 * @property {any[]} deviationDetails - Deviation details.
 */

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
  deviationsBrowse: [],
  deviationDetailsId: '',
  deviationDetails: {},
});
