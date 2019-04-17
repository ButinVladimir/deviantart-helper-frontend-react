import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DEVIATIONS_DETAILS, ID_PARAM } from '../../../consts/routes';

export default function DeviationsPreview({
  thumbnail,
  title,
  url,
  id,
  publishedTime,
  views,
  favourites,
  comments,
  downloads,
}) {
  return (
    <tr>
      <td>
        <div>
          <img alt={title} src={thumbnail.src} width={thumbnail.width} height={thumbnail.height} />
        </div>
        <div>
          <span>{title}</span>
          <span> (</span>
          <a href={url}>See on DA</a>
          <span>)</span>
          <span> (</span>
          <NavLink to={`${DEVIATIONS_DETAILS.replace(ID_PARAM, id)}`}>See details</NavLink>
          <span>)</span>
        </div>
        <div>
          <span>Id: </span>
          <span>{id}</span>
        </div>
        <div>
          <span>Published time: </span>
          <span>{new Date(publishedTime).toLocaleString()}</span>
        </div>
      </td>
      <td>
        {views}
      </td>
      <td>
        {favourites}
      </td>
      <td>
        {comments}
      </td>
      <td>
        {downloads}
      </td>
    </tr>
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
