import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(HeaderNotLoggedIn);
