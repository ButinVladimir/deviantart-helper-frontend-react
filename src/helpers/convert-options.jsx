import React from 'react';

/**
 * @description
 * Converts options to select options elements.
 *
 * @param {string[][]]} options - Array of options and titles.
 * @returns {option[]} Converted options.
 */
export default function convertOptions(options) {
  return options.map(o => (
    <option key={o[0]} value={o[0]}>{o[1]}</option>
  ));
}
