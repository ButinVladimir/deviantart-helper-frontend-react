const { prototype: { hasOwnProperty } } = Object;

/**
 * @description
 * Filters action properties and creates new object from them.
 *
 * @param {Object} action - The action object.
 * @param {string[]} fields - The array of fields to pick.
 * @returns {Object} Object with filtered fields.
 */
export default (action, fields) => {
  const result = {};

  fields.forEach((field) => {
    if (hasOwnProperty.call(action, field)) {
      result[field] = action[field];
    }
  });

  return result;
};
