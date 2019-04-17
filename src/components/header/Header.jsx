import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as serverRoutes from '../../consts/server-routes';
import * as routes from '../../consts/routes';
import Config from '../../config/config';

export default function Header({
  isLoggedIn,
  userIcon,
  config,
  revokeHandler,
  refreshHandler,
  deviationsLoadHandler,
}) {
  if (!isLoggedIn) {
    return (
      <div>
        <a href={`${config.serverUrl}${serverRoutes.AUTH_CONNECT}`}>Login</a>
      </div>
    );
  }

  return (
    <div>
      <div>
        <img src={userIcon} alt="" />
      </div>
      <div>
        <span>User </span>
        <span>
          {'( '}
          <NavLink to={routes.USER_INFO}>Info</NavLink>
          {' | '}
          <button type="button" onClick={revokeHandler}>Revoke</button>
          {' | '}
          <button type="button" onClick={refreshHandler}>Refresh</button>
          {' )'}
        </span>
      </div>
      <div>
        <span>Deviations </span>
        <span>
          {'( '}
          <NavLink to={routes.DEVIATIONS_BROWSE}>Browse</NavLink>
          {' | '}
          <NavLink to={routes.DEVIATIONS_STATISTICS}>Statistics</NavLink>
          {' | '}
          <button type="button" onClick={deviationsLoadHandler}>Refresh</button>
          {' )'}
        </span>
      </div>
    </div>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userIcon: PropTypes.string,
  config: PropTypes.instanceOf(Config).isRequired,
  revokeHandler: PropTypes.func.isRequired,
  refreshHandler: PropTypes.func.isRequired,
  deviationsLoadHandler: PropTypes.func.isRequired,
};

Header.defaultProps = {
  userIcon: '',
};
