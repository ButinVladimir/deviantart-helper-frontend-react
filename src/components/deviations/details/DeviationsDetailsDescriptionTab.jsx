import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Box from 'react-bulma-components/lib/components/box';
import Media from 'react-bulma-components/lib/components/media';
import DeviationThumbnail from '../shared/DeviationThumbnail';
import StatisticsLevel from '../../shared/StatisticsLevel';

/* eslint-disable react/no-danger */

export default function DeviationsDetailsDescriptionTab({
  title,
  thumbnail,
  url,
  publishedTime,
  description,
  views,
  favourites,
  comments,
  downloads,
}) {
  return (
    <>
      <Section>
        <Container>
          <Media>
            <DeviationThumbnail
              title={title}
              thumbnail={thumbnail}
              url={url}
              publishedTime={publishedTime}
            />
            <Media.Item>
              <Content dangerouslySetInnerHTML={{ __html: description }} />
            </Media.Item>
          </Media>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box>
            <StatisticsLevel
              titleValuePairs={[['Views', views], ['Favourites', favourites], ['Comments', comments], ['Downloads', downloads]]}
            />
          </Box>
        </Container>
      </Section>
    </>
  );
}

DeviationsDetailsDescriptionTab.propTypes = {
  ...DeviationThumbnail.PropTypes,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  favourites: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};

/* eslint-enable no-danger */
