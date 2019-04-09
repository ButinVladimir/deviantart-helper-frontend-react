import React from 'react';
import PropTypes from 'prop-types';
import Config from '../../config/config';

export default function Header({
  isLoggedIn,
  userId,
  userIcon,
  userName,
  userType,
  accessTokenExpires,
  refreshTokenExpires,
  config,
}) {
  if (!isLoggedIn) {
    return (
      <div>
        <a href={`${config.serverUrl}/auth/connect/deviantart`}>Login</a>
      </div>
    );
  }

  return (
    <div>
      <div>
        <img src={userIcon} alt="" />
      </div>
      <div>
        <span>User: </span>
        <b>{userName}</b>
      </div>
      <div>
        <span>User id: </span>
        <b>{userId}</b>
      </div>
      <div>
        <span>User type: </span>
        <b>{userType}</b>
      </div>
      <div>
        <span>Access token expires: </span>
        <b>{new Date(accessTokenExpires).toLocaleString()}</b>
      </div>
      <div>
        <span>Refresh token expires: </span>
        <b>{new Date(refreshTokenExpires).toLocaleString()}</b>
      </div>
    </div>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  userIcon: PropTypes.string,
  userName: PropTypes.string,
  userType: PropTypes.string,
  accessTokenExpires: PropTypes.number,
  refreshTokenExpires: PropTypes.number,
  config: PropTypes.instanceOf(Config).isRequired,
};

Header.defaultProps = {
  userId: '',
  userIcon: '',
  userName: '',
  userType: '',
  accessTokenExpires: 0,
  refreshTokenExpires: 0,
};
