import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Config from './config/config';
import Header from './components/header/HeaderContainer';
import Message from './components/message/MessageContainer';
import Error from './components/error/ErrorContainer';
import UserInfo from './components/user/info/UserInfoContainer';
import DeviationsBrowse from './components/deviations/browse/DeviationsBrowse';
import DeviationsDetails from './components/deviations/details/DeviationsDetailsContainer';
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
        {isLoggedIn && (
          <Switch>
            <Route
              exact
              path={routes.USER_INFO}
              render={() => (
                <UserInfo config={config} />
              )}
            />
            <Route
              exact
              path={routes.DEVIATIONS_BROWSE}
              render={() => (
                <DeviationsBrowse config={config} />
              )}
            />
            <Route
              exact
              path={routes.DEVIATIONS_DETAILS_WITH_ID}
              render={props => (
                <DeviationsDetails {...props} config={config} />
              )}
            />
          </Switch>
        )}
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  config: PropTypes.instanceOf(Config).isRequired,
  fetchUserData: PropTypes.func.isRequired,
};
