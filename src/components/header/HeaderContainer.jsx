import { connect } from 'react-redux';
import Header from './Header';
import '../../redux/state';

/**
 * @description
 * Maps Redux state to header props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  isLoggedIn: state.shared.isLoggedIn,
  userId: state.user.userId,
  userName: state.user.userName,
  userIcon: state.user.userIcon,
  userType: state.user.userType,
  accessTokenExpires: state.user.accessTokenExpires,
  refreshTokenExpires: state.user.refreshTokenExpires,
});

export default connect(mapStateToProps)(Header);
