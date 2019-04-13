import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DEVIATIONS_DETAILS } from '../../consts/routes';

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
    <li>
      <div>
        <img alt={title} src={thumbnail.src} width={thumbnail.width} height={thumbnail.height} />
      </div>
      <div>
        <span>{title}</span>
        <span> (</span>
        <a href={url}>See on DA</a>
        <span>)</span>
        <span> (</span>
        <NavLink to={`${DEVIATIONS_DETAILS}${id}`}>See details</NavLink>
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
      <div>
        <span>Views: </span>
        <span>{views}</span>
      </div>
      <div>
        <span>Favourites: </span>
        <span>{favourites}</span>
      </div>
      <div>
        <span>Comments: </span>
        <span>{comments}</span>
      </div>
      <div>
        <span>Downloads: </span>
        <span>{downloads}</span>
      </div>
    </li>
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
