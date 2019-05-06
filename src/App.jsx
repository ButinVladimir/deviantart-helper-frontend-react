import React, { PureComponent, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/header/HeaderContainer';
import Message from './components/message/MessageContainer';
import UserInfo from './components/user/info/UserInfoContainer';
import DeviationsBrowse from './components/deviations/browse/DeviationsBrowseContainer';
import DeviationsDetails from './components/deviations/details/DeviationsDetailsContainer';
import DeviationsStatistics from './components/deviations/statistics/DeviationsStatistics';
import * as routes from './consts/routes';
import './App.sass';

export default class App extends PureComponent {
  componentDidMount() {
    const { fetchUserData } = this.props;

    fetchUserData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Fragment>
        <Header />
        <Message />
        {isLoggedIn && (
          <Switch>
            <Route
              exact
              path={routes.USER_INFO}
              render={() => (
                <UserInfo />
              )}
            />
            <Route
              exact
              path={routes.DEVIATIONS_BROWSE}
              render={() => (
                <DeviationsBrowse />
              )}
            />
            <Route
              exact
              path={routes.DEVIATIONS_DETAILS}
              render={props => (
                <DeviationsDetails {...props} />
              )}
            />
            <Route
              exact
              path={routes.DEVIATIONS_STATISTICS}
              render={() => (
                <DeviationsStatistics />
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
  fetchUserData: PropTypes.func.isRequired,
};
