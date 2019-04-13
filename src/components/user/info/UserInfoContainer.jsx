import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import userLoadInfoActionCreator from '../../../redux/action-creators/user/load-info';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  userId: state.user.userId,
  userName: state.user.userName,
  userType: state.user.userType,
  accessTokenExpires: state.user.accessTokenExpires,
  refreshTokenExpires: state.user.refreshTokenExpires,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - Redux dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  fetchUserData: (config) => {
    dispatch(userLoadInfoActionCreator(config));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
