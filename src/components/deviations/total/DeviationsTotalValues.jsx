import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import StatisticsLevel from '../../shared/StatisticsLevel';

export default function DeviationsTotalValues({
  views,
  favourites,
  comments,
  downloads,
}) {
  return (
    <Section>
      <Container>
        <Box>
          <StatisticsLevel
            titleValuePairs={[['Views', views], ['Favourites', favourites], ['Comments', comments], ['Downloads', downloads]]}
          />
        </Box>
      </Container>
    </Section>
  );
}

DeviationsTotalValues.propTypes = {
  views: PropTypes.number.isRequired,
  favourites: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};
