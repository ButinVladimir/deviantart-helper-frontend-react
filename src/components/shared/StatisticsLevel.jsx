import React from 'react';
import PropTypes from 'prop-types';
import Level from 'react-bulma-components/lib/components/level';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

export default function StatisticsLevel({
  titleValuePairs,
}) {
  const items = titleValuePairs.map(pair => (
    <Level.Item key={pair[0] + pair[1]} className="has-text-centered">
      <Content>
        <div>
          <Heading size={4}>{pair[1]}</Heading>
        </div>
        <div>
          <Heading size={6} subtitle textTransform="uppercase">{pair[0]}</Heading>
        </div>
      </Content>
    </Level.Item>
  ));

  return (
    <Level breakpoint="tablet">
      {items}
    </Level>
  );
}

StatisticsLevel.propTypes = {
  titleValuePairs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
};
