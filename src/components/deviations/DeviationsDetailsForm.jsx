import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */

export default function DeviationsDetailsForm({
  preview,
  title,
  url,
  publishedTime,
  description,
  views,
  favourites,
  comments,
  downloads,
}) {
  return (
    <div>
      <div>
        <img alt={title} src={preview.src} width={preview.width} height={preview.height} />
      </div>
      <div>
        <span>{title}</span>
        <span> (</span>
        <a href={url}>See on DA</a>
        <span>)</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
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
    </div>
  );
}

DeviationsDetailsForm.propTypes = {
  preview: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  publishedTime: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  favourites: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};

/* eslint-enable no-danger */
