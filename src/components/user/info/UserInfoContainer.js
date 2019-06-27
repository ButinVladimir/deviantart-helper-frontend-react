import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import UserInfo from './UserInfo';
import userLoadInfo from '../../../redux/action-creators/user/load-info';

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
  fetchDateThreshold: state.user.fetchDateThreshold,
  requestDateThreshold: state.user.requestDateThreshold,
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
  fetchUserData: () => dispatch(userLoadInfo(ownProps.config)),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(UserInfo));
