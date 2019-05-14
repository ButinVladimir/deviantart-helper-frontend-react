import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

export default class UserInfo extends Component {
  static formatDate(date) {
    return date === null ? 'Null' : new Date(date).toLocaleString();
  }

  componentDidMount() {
    const { fetchUserData } = this.props;

    fetchUserData();
  }

  render() {
    const {
      userName,
      userId,
      userType,
      accessTokenExpires,
      refreshTokenExpires,
      fetchDateThreshold,
      requestDateThreshold,
    } = this.props;

    return (
      <Section>
        <Container>
          <Content>
            <Heading size={2}>Current user info</Heading>
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
              <strong>{UserInfo.formatDate(accessTokenExpires)}</strong>
            </p>
            <p>
              <span>Refresh token expires: </span>
              <strong>{UserInfo.formatDate(refreshTokenExpires)}</strong>
            </p>
            <p>
              <span>Fetch date threshold: </span>
              <strong>{UserInfo.formatDate(fetchDateThreshold)}</strong>
            </p>
            <p>
              <span>Request date threshold: </span>
              <strong>{UserInfo.formatDate(requestDateThreshold)}</strong>
            </p>
          </Content>
        </Container>
      </Section>
    );
  }
}

UserInfo.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  userId: PropTypes.string,
  userName: PropTypes.string,
  userType: PropTypes.string,
  accessTokenExpires: PropTypes.number,
  refreshTokenExpires: PropTypes.number,
  fetchDateThreshold: PropTypes.number,
  requestDateThreshold: PropTypes.number,
};

UserInfo.defaultProps = {
  userId: '',
  userName: '',
  userType: '',
  accessTokenExpires: null,
  refreshTokenExpires: null,
  fetchDateThreshold: null,
  requestDateThreshold: null,
};
