import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import Heading from 'react-bulma-components/lib/components/heading';
import Config from '../../../config/config';

export default class UserInfo extends Component {
  componentDidMount() {
    const { fetchUserData } = this.props;

    fetchUserData();
  }

  render() {
    const {
      userInfoLoading,
      userName,
      userId,
      userType,
      accessTokenExpires,
      refreshTokenExpires,
      refreshHandler,
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
            <p>
              <Button color="primary" loading={userInfoLoading} onClick={refreshHandler}>Refresh tokens</Button>
            </p>
          </Content>
        </Container>
      </Section>
    );
  }
}

UserInfo.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  config: PropTypes.instanceOf(Config).isRequired,
  fetchUserData: PropTypes.func.isRequired,
  userInfoLoading: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  userName: PropTypes.string,
  userType: PropTypes.string,
  accessTokenExpires: PropTypes.number,
  refreshTokenExpires: PropTypes.number,
  refreshHandler: PropTypes.func.isRequired,
};

UserInfo.defaultProps = {
  userId: '',
  userName: '',
  userType: '',
  accessTokenExpires: 0,
  refreshTokenExpires: 0,
};
