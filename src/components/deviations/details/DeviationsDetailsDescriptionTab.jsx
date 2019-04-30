import React from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Box from 'react-bulma-components/lib/components/box';
import Level from 'react-bulma-components/lib/components/level';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import 'react-bulma-components/lib/modifiers';

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
  const publishedTimeDate = new Date(publishedTime);

  return (
    <>
      <Section>
        <Container>
          <Media>
            <Media.Item position="left" className="image-container">
              <img
                alt={title}
                src={thumbnail.src}
              />
            </Media.Item>
            <Media.Item>
              <Content dangerouslySetInnerHTML={{ __html: description }} />
            </Media.Item>
            <Media.Item position="right">
              <Content>
                <p>
                  <small className="has-text-grey">
                    {publishedTimeDate.toLocaleString()}
                  </small>
                </p>
                <p>
                  <a href={url}>Visit DA page</a>
                </p>
              </Content>
            </Media.Item>
          </Media>
        </Container>
      </Section>

      <Section>
        <Container>
          <Box>
            <Level breakpoint="tablet">
              <Level.Item className="has-text-centered">
                <Content>
                  <div>
                    <Heading size={4}>{views}</Heading>
                  </div>
                  <div>
                    <Heading size={6} subtitle textTransform="uppercase">Views</Heading>
                  </div>
                </Content>
              </Level.Item>
              <Level.Item className="has-text-centered">
                <Content>
                  <div>
                    <Heading size={4}>{favourites}</Heading>
                  </div>
                  <div>
                    <Heading size={6} subtitle textTransform="uppercase">Favourites</Heading>
                  </div>
                </Content>
              </Level.Item>
              <Level.Item className="has-text-centered">
                <Content>
                  <div>
                    <Heading size={4}>{comments}</Heading>
                  </div>
                  <div>
                    <Heading size={6} subtitle textTransform="uppercase">Comments</Heading>
                  </div>
                </Content>
              </Level.Item>
              <Level.Item className="has-text-centered">
                <Content>
                  <div>
                    <Heading size={4}>{downloads}</Heading>
                  </div>
                  <div>
                    <Heading size={6} subtitle textTransform="uppercase">Downloads</Heading>
                  </div>
                </Content>
              </Level.Item>
            </Level>
          </Box>
        </Container>
      </Section>
    </>
  );
}

DeviationsDetailsDescriptionTab.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  publishedTime: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  favourites: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};

/* eslint-enable no-danger */
