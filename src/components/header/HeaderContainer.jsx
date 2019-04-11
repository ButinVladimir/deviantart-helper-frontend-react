import { connect } from 'react-redux';
import Header from './Header';
import userRevokeActionCreator from '../../redux/action-creators/user/revoke';
import userRefreshActionCreator from '../../redux/action-creators/user/refresh';
import deviationsLoadActionCreator from '../../redux/action-creators/deviations/load';

/**
 * @description
 * Maps Redux state to header props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  isLoggedIn: state.shared.isLoggedIn,
  userIcon: state.user.userIcon,
});

/**
 * @description
 * Maps Redux dispatch to header props.
 *
 * @param {Function} dispatch - The dispatch.
 * @param {Object} ownProps - Component own props.
 * @returns {Object} Props.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  revokeHandler: () => dispatch(userRevokeActionCreator(ownProps.config)),
  refreshHandler: () => dispatch(userRefreshActionCreator(ownProps.config)),
  deviationsLoadHandler: () => dispatch(deviationsLoadActionCreator(ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
