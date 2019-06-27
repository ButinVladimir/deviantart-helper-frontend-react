import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import consumeConfig, { getConfigProvider } from '../ConfigContext';
import defaultConfig from '../../../config';
import Config from '../../../config/config';

describe('ConfigContext', () => {
  const customComponent = ({ config, prop1, prop2 }) => (
    <div config={config}>
      {prop1}
      {prop2}
    </div>
  );
  customComponent.propTypes = {
    config: PropTypes.instanceOf(Config).isRequired,
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.string.isRequired,
  };

  it('can be rendered correctly', () => {
    const Provider = getConfigProvider();
    const props = {
      prop1: 'value',
      prop2: 'anotherValue',
    };

    const wrapper = mount(
      <Provider value={defaultConfig}>
        {consumeConfig(customComponent)(props)}
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
