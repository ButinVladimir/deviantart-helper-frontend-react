import { DEVIATIONS_DETAILS_CHANGE_FORM_FIELD_VALUES } from '../../../actions';
import getTimestamp from '../../../../helpers/get-timestamp';

/**
 * @global
 * @description
 * Action to change form field values for deviations details page.
 *
 * @typedef {Object} DeviationsDetailsChangeFormFieldValuesAction
 */

/**
 * @description
 * Creates action to change form field values for deviations details page.
 *
 * @param {Object} values - New form fields values.
 * @returns {DeviationsDetailsChangeFormFieldValuesAction} Action.
 */
const changeFormFieldValues = values => ({
  type: DEVIATIONS_DETAILS_CHANGE_FORM_FIELD_VALUES,
  ...values,
});

/**
 * @description
 * Creates action to change timestamp begin value on deviations details page.
 *
 * @param {string} timestampBegin - Timestamp begin value.
 * @returns {DeviationsDetailsChangeFormFieldValuesAction} Action.
 */
export const changeTimestampBeginActionCreator = timestampBegin => changeFormFieldValues({
  timestampBegin: getTimestamp(timestampBegin),
});

/**
 * @description
 * Creates action to change timestamp end value on deviations details page.
 *
 * @param {string} timestampEnd - Timestamp end value.
 * @returns {DeviationsDetailsChangeFormFieldValuesAction} Action.
 */
export const changeTimestampEndActionCreator = timestampEnd => changeFormFieldValues({
  timestampEnd: getTimestamp(timestampEnd),
});
