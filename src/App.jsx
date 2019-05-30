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
import { FULLY_LOGINNED } from './consts/user-states';
import * as routes from './consts/routes';
import './App.sass';

export default class App extends PureComponent {
  componentDidMount() {
    const { fetchUserData } = this.props;

    fetchUserData();
  }

  render() {
    const { userState } = this.props;

    return (
      <>
        <Header />
        <Message />
        {userState === FULLY_LOGINNED && (
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
  userState: PropTypes.number.isRequired,
  fetchUserData: PropTypes.func.isRequired,
};
