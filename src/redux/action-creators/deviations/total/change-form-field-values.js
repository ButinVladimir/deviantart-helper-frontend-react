import { DEVIATIONS_TOTAL_CHANGE_FORM_FIELD_VALUES } from '../../../actions';
import getTimestamp from '../../../../helpers/get-timestamp';

/**
 * @global
 * @description
 * Action to change form field values for deviations total statistics page.
 *
 * @typedef {Object} DeviationsTotalChangeFormFieldValuesAction
 */

/**
 * @description
 * Creates action to change form field values for deviations total statistics page.
 *
 * @param {Object} values - New form fields values.
 * @returns {DeviationsTotalChangeFormFieldValuesAction} Action.
 */
const changeFormFieldValues = values => ({
  type: DEVIATIONS_TOTAL_CHANGE_FORM_FIELD_VALUES,
  ...values,
});

/**
 * @description
 * Creates action to change timestamp begin value on deviations total statistics page.
 *
 * @param {string} timestampBegin - Timestamp begin value.
 * @returns {DeviationsTotalChangeFormFieldValuesAction} Action.
 */
export const changeTimestampBeginActionCreator = timestampBegin => changeFormFieldValues({
  timestampBegin: getTimestamp(timestampBegin),
});

/**
 * @description
 * Creates action to change timestamp end value on deviations total statistics page.
 *
 * @param {string} timestampEnd - Timestamp end value.
 * @returns {DeviationsTotalChangeFormFieldValuesAction} Action.
 */
export const changeTimestampEndActionCreator = timestampEnd => changeFormFieldValues({
  timestampEnd: getTimestamp(timestampEnd),
});
