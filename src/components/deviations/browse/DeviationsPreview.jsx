import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Level from 'react-bulma-components/lib/components/level';
import Heading from 'react-bulma-components/lib/components/heading';
import { DEVIATIONS_DETAILS, ID_PARAM } from '../../../consts/routes';

export default function DeviationsPreview({
  thumbnail,
  title,
  // eslint-disable-next-line no-unused-vars
  url,
  id,
  publishedTime,
  views,
  favourites,
  comments,
  downloads,
}) {
  const publishedTimeDate = new Date(publishedTime);

  return (
    <Media>
      <Media.Item position="left" className="image-container">
        <img alt={title} src={thumbnail.src} />
      </Media.Item>
      <Media.Item>
        <Level>
          <Level.Side>
            <NavLink className="is-size-4 has-text-weight-semibold" to={`${DEVIATIONS_DETAILS.replace(ID_PARAM, id)}`}>
              {title}
            </NavLink>
          </Level.Side>
          <Level.Side align="right">
            <small className="has-text-grey">
              {publishedTimeDate.toLocaleString()}
            </small>
          </Level.Side>
        </Level>
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
      </Media.Item>
    </Media>
  );
}

DeviationsPreview.propTypes = {
  thumbnail: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  publishedTime: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  favourites: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};
