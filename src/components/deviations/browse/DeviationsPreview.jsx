import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import DeviationThumbnail from '../shared/DeviationThumbnail';
import StatisticsLevel from '../../shared/StatisticsLevel';
import { DEVIATIONS_DETAILS, ID_PARAM } from '../../../consts/routes';

export default function DeviationsPreview({
  thumbnail,
  title,
  url,
  id,
  publishedTime,
  nsfw,
  views,
  favourites,
  comments,
  downloads,
}) {
  return (
    <Media>
      <DeviationThumbnail
        title={title}
        thumbnail={thumbnail}
        url={url}
        publishedTime={publishedTime}
        nsfw={nsfw}
      />
      <Media.Item>
        <Content>
          <Heading size={3}>
            <NavLink to={`${DEVIATIONS_DETAILS.replace(ID_PARAM, id)}`}>
              {title}
            </NavLink>
          </Heading>
        </Content>
        <StatisticsLevel
          titleValuePairs={[['Views', views], ['Favourites', favourites], ['Comments', comments], ['Downloads', downloads]]}
        />
      </Media.Item>
    </Media>
  );
}

DeviationsPreview.propTypes = {
  ...DeviationThumbnail.PropTypes,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  favourites: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};
