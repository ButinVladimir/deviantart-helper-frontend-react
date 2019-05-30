import { connect } from 'react-redux';
import consumeConfig from '../shared/ConfigContext';
import HeaderFetchingInfo from './HeaderFetchingInfo';
import revokeQueryActionCreator from '../../redux/action-creators/shared/revoke-query';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  revokeLoading: state.shared.revokeLoading,
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
  revokeHandler: () => dispatch(revokeQueryActionCreator(ownProps.config)),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(HeaderFetchingInfo));
