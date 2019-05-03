import React from 'react';
import Tabs from 'react-bulma-components/lib/components/tabs';

/**
 * @description
 * Converts tabs to tab elements.
 *
 * @param {string[][]]} tabs - Array of tabs and titles.
 * @param {string} activeTab - The active tab.
 * @param {Function} changeTabHandler - The tab change handler.
 * @returns {Tabs.Tab[]} Converted options.
 */
export default function convertOptions(tabs, activeTab, changeTabHandler) {
  return tabs.map(t => (
    <Tabs.Tab key={t[0]} active={activeTab === t[0]} onClick={changeTabHandler(t[0])}>
      {t[1]}
    </Tabs.Tab>
  ));
}
