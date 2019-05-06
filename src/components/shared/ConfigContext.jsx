import React, { createContext } from 'react';

const ConfigContext = createContext(null);

/**
 * @description
 * Gets config context provider.
 *
 * @returns {import('react').Provider} Provider.
 */
export const getConfigProvider = () => ConfigContext.Provider;

/**
 * @description
 * HOC to inject config.
 *
 * @param {React} Component - React component.
 * @returns {(props: Object) => React} Functional component.
 */
export default Component => props => (
  <ConfigContext.Consumer>
    {config => <Component config={config} {...props} />}
  </ConfigContext.Consumer>
);
