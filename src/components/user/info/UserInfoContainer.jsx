import { connect } from 'react-redux';
import UserInfo from './UserInfo';
import userLoadInfoActionCreator from '../../../redux/action-creators/user/load-info';
import userRefreshActionCreator from '../../../redux/action-creators/user/refresh';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  userInfoLoading: state.user.userInfoLoading || state.user.refreshLoading,
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
 * @param {Object} ownProps - Component own props.
 * @returns {Object} Props.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserData: () => dispatch(userLoadInfoActionCreator(ownProps.config)),
  refreshHandler: () => dispatch(userRefreshActionCreator(ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
