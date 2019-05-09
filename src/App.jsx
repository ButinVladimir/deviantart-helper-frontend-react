import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/header/HeaderContainer';
import Message from './components/message/MessageContainer';
import UserInfo from './components/user/info/UserInfoContainer';
import DeviationsBrowse from './components/deviations/browse/DeviationsBrowseContainer';
import DeviationsDetails from './components/deviations/details/DeviationsDetailsContainer';
import DeviationsStatistics from './components/deviations/statistics/DeviationsStatisticsContainer';
import DeviationsTotal from './components/deviations/total/DeviationsTotalContainer';
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
      <>
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
            <Route
              exact
              path={routes.DEVIATIONS_TOTAL}
              render={() => (
                <DeviationsTotal />
              )}
            />
          </Switch>
        )}
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  fetchUserData: PropTypes.func.isRequired,
};
