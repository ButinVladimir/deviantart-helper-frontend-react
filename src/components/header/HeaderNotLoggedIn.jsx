import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Button from 'react-bulma-components/lib/components/button';
import * as serverRoutes from '../../consts/server-routes';
import Config from '../../config/config';

export default function HeaderNotLoggedIn({
  userInfoLoading,
  config,
}) {
  const loginUrl = `${config.serverUrl}${serverRoutes.SERVER_ROUTE_AUTH_CONNECT}`;

  return (
    <Navbar.Brand>
      <Navbar.Item>
        <Button id="login-button" color="primary" loading={userInfoLoading} onClick={() => { window.location = loginUrl; }}>Log in</Button>
      </Navbar.Item>
    </Navbar.Brand>
  );
}

HeaderNotLoggedIn.propTypes = {
  userInfoLoading: PropTypes.bool.isRequired,
  config: PropTypes.instanceOf(Config).isRequired,
};
