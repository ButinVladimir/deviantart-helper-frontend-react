import React, { PureComponent, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Section, Container } from 'react-bulma-components';
import Config from './config/config';
import Header from './components/header/HeaderContainer';
import Message from './components/message/MessageContainer';
import Error from './components/error/ErrorContainer';
import UserInfo from './components/user/info/UserInfoContainer';
import DeviationsBrowse from './components/deviations/browse/DeviationsBrowse';
import DeviationsDetails from './components/deviations/details/DeviationsDetailsContainer';
import DeviationsStatistics from './components/deviations/statistics/DeviationsStatistics';
import * as routes from './consts/routes';

export default class App extends PureComponent {
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
          <Section>
            <Container>
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
                  path={routes.DEVIATIONS_DETAILS}
                  render={props => (
                    <DeviationsDetails {...props} config={config} />
                  )}
                />
                <Route
                  exact
                  path={routes.DEVIATIONS_STATISTICS}
                  render={() => (
                    <DeviationsStatistics config={config} />
                  )}
                />
              </Switch>
            </Container>
          </Section>
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
