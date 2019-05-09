import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Button from 'react-bulma-components/lib/components/button';
import * as routes from '../../consts/routes';

export default function HeaderLoggedIn({
  startFetchDataLoading,
  revokeLoading,
  userName,
  userIcon,
  toggleMenuHandler,
  startFetchDataHandler,
  revokeHandler,
}) {
  return (
    <>
      <Navbar.Brand>
        <Navbar.Item>
          <img src={userIcon} alt={userName} />
        </Navbar.Item>
        <Navbar.Burger onClick={toggleMenuHandler} />
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item dropdown hoverable>
            <Navbar.Link>Application</Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item renderAs={() => <NavLink className="navbar-item" to={routes.USER_INFO}>User info</NavLink>} />
            </Navbar.Dropdown>
          </Navbar.Item>

          <Navbar.Item dropdown hoverable>
            <Navbar.Link>Deviations</Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item renderAs={() => <NavLink className="navbar-item" to={routes.DEVIATIONS_BROWSE}>Browse</NavLink>} />
              <Navbar.Item renderAs={() => <NavLink className="navbar-item" to={routes.DEVIATIONS_STATISTICS}>Detailed statistics</NavLink>} />
              <Navbar.Item renderAs={() => <NavLink className="navbar-item" to={routes.DEVIATIONS_TOTAL}>Total statistics</NavLink>} />
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>

        <Navbar.Container position="end">
          <Navbar.Item>
            <Button.Group>
              <Button color="light" loading={startFetchDataLoading} onClick={startFetchDataHandler}>Fetch data</Button>
              <Button color="danger" loading={revokeLoading} onClick={revokeHandler}>Log out</Button>
            </Button.Group>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </>
  );
}

HeaderLoggedIn.propTypes = {
  startFetchDataLoading: PropTypes.bool.isRequired,
  revokeLoading: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  userIcon: PropTypes.string,
  toggleMenuHandler: PropTypes.func.isRequired,
  startFetchDataHandler: PropTypes.func.isRequired,
  revokeHandler: PropTypes.func.isRequired,
};

HeaderLoggedIn.defaultProps = {
  userName: '',
  userIcon: '',
};
