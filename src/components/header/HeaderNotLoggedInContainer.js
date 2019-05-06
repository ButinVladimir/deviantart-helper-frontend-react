import { connect } from 'react-redux';
import consumeConfig from '../shared/ConfigContext';
import HeaderNotLoggedIn from './HeaderNotLoggedIn';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  userInfoLoading: state.user.userInfoLoading,
});

export default consumeConfig(connect(mapStateToProps)(HeaderNotLoggedIn));
