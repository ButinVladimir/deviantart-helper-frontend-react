import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Config from './config/config';
import Header from './components/header/HeaderContainer';

export default class App extends Component {
  componentDidMount() {
    const { fetchUserData, config } = this.props;

    fetchUserData(config);
  }

  render() {
    const { config } = this.props;

    return (
      <Header config={config} />
    );
  }
}

App.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
  fetchUserData: PropTypes.func.isRequired,
};
