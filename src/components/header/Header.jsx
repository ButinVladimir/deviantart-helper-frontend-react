import React from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar } from 'react-bulma-components';
import HeaderNotLoggedIn from './HeaderNotLoggedIn';
import HeaderLoggedIn from './HeaderLoggedInContainer';
import Config from '../../config/config';

export default function Header({
  isLoggedIn,
  menuToggled,
  config,
}) {
  return (
    <Navbar color="dark" active={menuToggled}>
      <Container breakpoint="fullhd">
        {!isLoggedIn && <HeaderNotLoggedIn config={config} />}
        {isLoggedIn && <HeaderLoggedIn config={config} />}
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  menuToggled: PropTypes.bool.isRequired,
  config: PropTypes.instanceOf(Config).isRequired,
};
