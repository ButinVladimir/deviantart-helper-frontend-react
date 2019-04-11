import { connect } from 'react-redux';
import Error from './Error';
import hideErrorActionCreator from '../../redux/action-creators/shared/hide-error';

/**
 * @description
 * Maps Redux state to header props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  showError: state.shared.showError,
  errorMessage: state.shared.errorMessage,
});

/**
 * @description
 * Maps Redux dispatch to header props.
 *
 * @param {Function} dispatch - The dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  hideErrorHandler: () => dispatch(hideErrorActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);
