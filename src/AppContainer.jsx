import { connect } from 'react-redux';
import consumeConfig from './components/shared/ConfigContext';
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
 * @param {Object} ownProps - Own props.
 * @returns {Object} Props.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserData: () => {
    dispatch(userLoadInfoActionCreator(ownProps.config));
  },
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(App));
