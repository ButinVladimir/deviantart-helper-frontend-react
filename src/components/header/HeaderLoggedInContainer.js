import { connect } from 'react-redux';
import consumeConfig from '../shared/ConfigContext';
import HeaderLoggedIn from './HeaderLoggedIn';
import toggleMenuActionCreator from '../../redux/action-creators/shared/toggle-menu';
import revokeQueryActionCreator from '../../redux/action-creators/shared/revoke-query';
import startFetchDataActionCreator from '../../redux/action-creators/shared/start-fetch-data';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  startFetchDataLoading: state.shared.fetchDataLoading,
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
  startFetchDataHandler: () => dispatch(startFetchDataActionCreator(ownProps.config)),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(HeaderLoggedIn));
