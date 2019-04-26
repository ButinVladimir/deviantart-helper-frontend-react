/**
 * @description
 * Converts Date object to timestamp.
 *
 * @param {Date} date - The date object.
 * @returns {number|null} - The timestamp.
 */
export default date => (date ? date.getTime() : null);
