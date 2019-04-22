import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content } from 'react-bulma-components';
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
      <Content>
        <h2 className="title">Current user info</h2>
        <p>
          <span>User: </span>
          <strong>{userName}</strong>
        </p>
        <p>
          <span>User id: </span>
          <strong>{userId}</strong>
        </p>
        <p>
          <span>User type: </span>
          <strong>{userType}</strong>
        </p>
        <p>
          <span>Access token expires: </span>
          <strong>{new Date(accessTokenExpires).toLocaleString()}</strong>
        </p>
        <p>
          <span>Refresh token expires: </span>
          <strong>{new Date(refreshTokenExpires).toLocaleString()}</strong>
        </p>
      </Content>
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
