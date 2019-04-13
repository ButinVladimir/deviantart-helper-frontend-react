import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Config from './config/config';
import AuthGuard from './components/AuthGuard';
import Header from './components/header/HeaderContainer';
import Message from './components/message/MessageContainer';
import Error from './components/error/ErrorContainer';
import UserInfo from './components/user/info/UserInfoContainer';
import DeviationsBrowse from './components/deviations/DeviationsBrowse';
import DeviationsDetails from './components/deviations/DeviationsDetailsContainer';
import * as routes from './consts/routes';

export default class App extends Component {
  componentDidMount() {
    const { fetchUserData, config } = this.props;

    fetchUserData(config);
  }

  render() {
    const { isLoggedIn, config } = this.props;

    return (
      <Fragment>
        <Header config={config} />
        <Message />
        <Error />
        {isLoggedIn && 
          <Switch>
            <Route
              exact
              path={routes.USER_INFO}
              render={() => (
                <AuthGuard isLoggedIn={isLoggedIn}>
                  <UserInfo config={config} />
                </AuthGuard>
              )}
            />
            <Route
              exact
              path={routes.DEVIATIONS_BROWSE}
              render={() => (
                <AuthGuard isLoggedIn={isLoggedIn}>
                  <DeviationsBrowse config={config} />
                </AuthGuard>
              )}
            />
            <Route
              exact
              path={routes.DEVIATIONS_DETAILS_WITH_ID}
              render={props => (
                <AuthGuard isLoggedIn={isLoggedIn}>
                  <DeviationsDetails {...props} config={config} />
                </AuthGuard>
              )}
            />
          </Switch>
        }
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  config: PropTypes.instanceOf(Config).isRequired,
  fetchUserData: PropTypes.func.isRequired,
};
