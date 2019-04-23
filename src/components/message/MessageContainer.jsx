import { connect } from 'react-redux';
import Message from './Message';
import hideMessageActionCreator from '../../redux/action-creators/shared/hide-message';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  showMessage: state.shared.showMessage,
  messageColor: state.shared.messageColor,
  message: state.shared.message,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  hideMessageHandler: () => dispatch(hideMessageActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
