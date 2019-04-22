import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Button } from 'react-bulma-components';
import * as serverRoutes from '../../consts/server-routes';
import Config from '../../config/config';

export default function HeaderNotLoggedIn({
  config,
}) {
  return (
    <Navbar.Brand>
      <Navbar.Item href={`${config.serverUrl}${serverRoutes.AUTH_CONNECT}`}>
        <Button color="primary">Log in</Button>
      </Navbar.Item>
    </Navbar.Brand>
  );
}

HeaderNotLoggedIn.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
};
