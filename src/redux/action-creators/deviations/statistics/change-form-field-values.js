import { DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES } from '../../../actions';
import getTimestamp from '../../../../helpers/get-timestamp';

/**
 * @global
 * @description
 * Action to change form fields values on deviations statistics page.
 *
 * @typedef {Object} DeviationsStatisticsChangeFormFieldValuesAction
 */

/**
 * @description
 * Creates action to change form fields values on deviations statistics page.
 *
 * @param {Object} values - New form fields values.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
const changeFormFieldValues = values => ({
  type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
  ...values,
});

/**
 * @description
 * Creates action to change published time begin value on deviations statistics page.
 *
 * @param {Date} publishedTimeBegin - Published time begin value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changePublishedTimeBeginActionCreator = publishedTimeBegin => changeFormFieldValues({
  publishedTimeBegin: getTimestamp(publishedTimeBegin),
});

/**
 * @description
 * Creates action to change published time end value on deviations statistics page.
 *
 * @param {Date} publishedTimeEnd - Published time end value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changePublishedTimeEndActionCreator = publishedTimeEnd => changeFormFieldValues({
  publishedTimeEnd: getTimestamp(publishedTimeEnd),
});

/**
 * @description
 * Creates action to change sort field value on deviations statistics page.
 *
 * @param {string} sortField - Sort field value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changeSortFieldActionCreator = sortField => changeFormFieldValues({
  sortField,
});

/**
 * @description
 * Creates action to change published time end value on deviations statistics page.
 *
 * @param {string} sortOrder - Sort order value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changeSortOrderActionCreator = sortOrder => changeFormFieldValues({
  sortOrder: parseInt(sortOrder, 10),
});

/**
 * @description
 * Creates action to change title value on deviations statistics page.
 *
 * @param {string} title - Title value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changeTitleActionCreator = title => changeFormFieldValues({
  title,
});

/**
 * @description
 * Creates action to change NSFW value on deviations statistics page.
 *
 * @param {string} nsfw - NSFW value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changeNsfwActionCreator = nsfw => changeFormFieldValues({
  nsfw,
});

/**
 * @description
 * Creates action to change filter by ids value on deviations statistics page.
 *
 * @param {boolean} filterByIds - Filter by ids value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changeFilterByIdsActionCreator = filterByIds => changeFormFieldValues({
  filterByIds,
});

/**
 * @description
 * Creates action to change timestamp begin value on deviations statistics page.
 *
 * @param {Date} timestampBegin - Timestamp begin value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changeTimestampBeginActionCreator = timestampBegin => changeFormFieldValues({
  timestampBegin: getTimestamp(timestampBegin),
});

/**
 * @description
 * Creates action to change timestamp end value on deviations statistics page.
 *
 * @param {Date} timestampEnd - Timestamp end value.
 * @returns {DeviationsStatisticsChangeFormFieldValuesAction} Action.
 */
export const changeTimestampEndActionCreator = timestampEnd => changeFormFieldValues({
  timestampEnd: getTimestamp(timestampEnd),
});
