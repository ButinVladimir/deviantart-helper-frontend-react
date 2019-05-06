import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bulma-components/lib/components/container';
import Navbar from 'react-bulma-components/lib/components/navbar';
import HeaderNotLoggedIn from './HeaderNotLoggedInContainer';
import HeaderLoggedIn from './HeaderLoggedInContainer';

export default function Header({
  isLoggedIn,
  menuToggled,
}) {
  return (
    <Navbar color="dark" active={menuToggled}>
      <Container breakpoint="fullhd">
        {!isLoggedIn && <HeaderNotLoggedIn />}
        {isLoggedIn && <HeaderLoggedIn />}
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  menuToggled: PropTypes.bool.isRequired,
};
