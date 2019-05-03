import { DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES } from '../../../actions';
import getTimestamp from '../../../../helpers/get-timestamp';

/**
 * @global
 * @description
 * Action to change form fields values on deviations browse page.
 *
 * @typedef {Object} DeviationsBrowseChangeFormFieldValuesAction
 */

/**
 * @description
 * Creates action to change form fields values on deviations browse page.
 *
 * @param {Object} values - New form fields values.
 * @returns {DeviationsBrowseChangeFormFieldValuesAction} Action.
 */
const changeFormFieldValues = values => ({
  type: DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES,
  ...values,
});

/**
 * @description
 * Creates action to change published time begin value on deviations browse page.
 *
 * @param {Date} publishedTimeBegin - Published time begin value.
 * @returns {DeviationsBrowseChangeFormFieldValuesAction} Action.
 */
export const changePublishedTimeBeginActionCreator = publishedTimeBegin => changeFormFieldValues({
  publishedTimeBegin: getTimestamp(publishedTimeBegin),
});

/**
 * @description
 * Creates action to change published time end value on deviations browse page.
 *
 * @param {Date} publishedTimeEnd - Published time end value.
 * @returns {DeviationsBrowseChangeFormFieldValuesAction} Action.
 */
export const changePublishedTimeEndActionCreator = publishedTimeEnd => changeFormFieldValues({
  publishedTimeEnd: getTimestamp(publishedTimeEnd),
});

/**
 * @description
 * Creates action to change sort field value on deviations browse page.
 *
 * @param {string} sortField - Sort field value.
 * @returns {DeviationsBrowseChangeFormFieldValuesAction} Action.
 */
export const changeSortFieldActionCreator = sortField => changeFormFieldValues({
  sortField,
});

/**
 * @description
 * Creates action to change published time end value on deviations browse page.
 *
 * @param {string} sortOrder - Sort order value.
 * @returns {DeviationsBrowseChangeFormFieldValuesAction} Action.
 */
export const changeSortOrderActionCreator = sortOrder => changeFormFieldValues({
  sortOrder: parseInt(sortOrder, 10),
});

/**
 * @description
 * Creates action to change title value on deviations browse page.
 *
 * @param {string} title - Title value.
 * @returns {DeviationsBrowseChangeFormFieldValuesAction} Action.
 */
export const changeTitleActionCreator = title => changeFormFieldValues({
  title,
});

/**
 * @description
 * Creates action to change NSFW value on deviations browse page.
 *
 * @param {string} nsfw - NSFW value.
 * @returns {DeviationsBrowseChangeFormFieldValuesAction} Action.
 */
export const changeNsfwActionCreator = nsfw => changeFormFieldValues({
  nsfw,
});
