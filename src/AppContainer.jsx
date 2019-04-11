import { connect } from 'react-redux';
import App from './App';
import userLoadInfoActionCreator from './redux/action-creators/user/load-info';

/**
 * @description
 * Maps Redux state to app props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  isLoggedIn: state.shared.isLoggedIn,
});

/**
 * @description
 * Maps Redux dispatch to app props.
 *
 * @param {Function} dispatch - Redux dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  fetchUserData: (config) => {
    dispatch(userLoadInfoActionCreator(config));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
