import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MAIN_PAGE } from '../consts/routes';

export default function AuthGuard({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return (
      <Redirect to={MAIN_PAGE} />
    );
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

AuthGuard.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
