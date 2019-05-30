import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bulma-components/lib/components/container';
import Navbar from 'react-bulma-components/lib/components/navbar';
import HeaderNotLoggedIn from './HeaderNotLoggedInContainer';
import HeaderFetchingInfo from './HeaderFetchingInfoContainer';
import HeaderLoggedIn from './HeaderLoggedInContainer';
import * as userStates from '../../consts/user-states';

export default function Header({
  userState,
  menuToggled,
}) {
  return (
    <Navbar color="dark" active={menuToggled}>
      <Container breakpoint="fullhd">
        {userState === userStates.NOT_LOGGINED && <HeaderNotLoggedIn />}
        {userState === userStates.FETCHING_INFO && <HeaderFetchingInfo />}
        {userState === userStates.FULLY_LOGINNED && <HeaderLoggedIn />}
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  userState: PropTypes.number.isRequired,
  menuToggled: PropTypes.bool.isRequired,
};
