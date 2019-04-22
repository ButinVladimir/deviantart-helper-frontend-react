import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Navbar, Button } from 'react-bulma-components';
import * as routes from '../../consts/routes';
import Config from '../../config/config';

export default function HeaderLoggedIn({
  userName,
  userIcon,
  // eslint-disable-next-line no-unused-vars
  config,
  toggleMenuHandler,
  deviationsLoadHandler,
  revokeHandler,
}) {
  return (
    <Fragment>
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
              <Navbar.Item renderAs={() => <NavLink className="navbar-item" to={routes.DEVIATIONS_STATISTICS}>Statistics</NavLink>} />
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>

        <Navbar.Container position="end">
          <Navbar.Item>
            <Button.Group>
              <Button onClick={deviationsLoadHandler} color="light">Refresh data</Button>
              <Button onClick={revokeHandler} color="danger">Log out</Button>
            </Button.Group>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Fragment>
  );
}

HeaderLoggedIn.propTypes = {
  userName: PropTypes.string,
  userIcon: PropTypes.string,
  config: PropTypes.instanceOf(Config).isRequired,
  toggleMenuHandler: PropTypes.func.isRequired,
  deviationsLoadHandler: PropTypes.func.isRequired,
  revokeHandler: PropTypes.func.isRequired,
};

HeaderLoggedIn.defaultProps = {
  userName: '',
  userIcon: '',
};
