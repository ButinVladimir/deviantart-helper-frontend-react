import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-bulma-components/lib/components/media';

export default function DeviationThumbnail({
  title,
  thumbnail,
  url,
  publishedTime,
}) {
  const publishedTimeDate = new Date(publishedTime);

  return (
    <Media.Item position="left" className="image-container">
      <div>
        <img
          alt={title}
          src={thumbnail.src}
        />
      </div>
      <div>
        <small className="has-text-grey">
          {publishedTimeDate.toLocaleString()}
        </small>
      </div>
      <div>
        <a href={url}>Visit DA page</a>
      </div>
    </Media.Item>
  );
}

DeviationThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  publishedTime: PropTypes.number.isRequired,
};
