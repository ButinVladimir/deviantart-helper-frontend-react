import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Config from '../../../config/config';

export default class UserInfo extends Component {
  componentDidMount() {
    const { fetchUserData, config } = this.props;

    fetchUserData(config);
  }

  render() {
    const {
      userName,
      userId,
      userType,
      accessTokenExpires,
      refreshTokenExpires,
    } = this.props;

    return (
      <div>
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
}

UserInfo.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
  fetchUserData: PropTypes.func.isRequired,
  userId: PropTypes.string,
  userName: PropTypes.string,
  userType: PropTypes.string,
  accessTokenExpires: PropTypes.number,
  refreshTokenExpires: PropTypes.number,
};

UserInfo.defaultProps = {
  userId: '',
  userName: '',
  userType: '',
  accessTokenExpires: 0,
  refreshTokenExpires: 0,
};
