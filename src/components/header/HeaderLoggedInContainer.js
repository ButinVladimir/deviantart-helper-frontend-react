import { connect } from 'react-redux';
import consumeConfig from '../shared/ConfigContext';
import HeaderLoggedIn from './HeaderLoggedIn';
import toggleMenuActionCreator from '../../redux/action-creators/shared/toggle-menu';
import revokeQueryActionCreator from '../../redux/action-creators/shared/revoke-query';
import deviationsLoadActionCreator from '../../redux/action-creators/deviations/load';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  deviationsLoading: state.deviations.common.deviationsLoading,
  revokeLoading: state.shared.revokeLoading,
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
  revokeHandler: () => dispatch(revokeQueryActionCreator(ownProps.config)),
  deviationsLoadHandler: () => dispatch(deviationsLoadActionCreator(ownProps.config)),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(HeaderLoggedIn));
