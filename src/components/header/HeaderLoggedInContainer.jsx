import { connect } from 'react-redux';
import HeaderLoggedIn from './HeaderLoggedIn';
import toggleMenuActionCreator from '../../redux/action-creators/shared/toggle-menu';
import userRevokeActionCreator from '../../redux/action-creators/user/revoke';
import userRefreshActionCreator from '../../redux/action-creators/user/refresh';
import deviationsLoadActionCreator from '../../redux/action-creators/deviations/load';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  userName: state.user.userName,
  userIcon: state.user.userIcon,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The dispatch.
 * @param {Object} ownProps - Component own props.
 * @returns {Object} Props.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleMenuHandler: () => dispatch(toggleMenuActionCreator()),
  revokeHandler: () => dispatch(userRevokeActionCreator(ownProps.config)),
  refreshHandler: () => dispatch(userRefreshActionCreator(ownProps.config)),
  deviationsLoadHandler: () => dispatch(deviationsLoadActionCreator(ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLoggedIn);
