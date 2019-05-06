import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

export default class UserInfo extends Component {
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
              <strong>{new Date(accessTokenExpires).toLocaleString()}</strong>
            </p>
            <p>
              <span>Refresh token expires: </span>
              <strong>{new Date(refreshTokenExpires).toLocaleString()}</strong>
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
};

UserInfo.defaultProps = {
  userId: '',
  userName: '',
  userType: '',
  accessTokenExpires: 0,
  refreshTokenExpires: 0,
};
