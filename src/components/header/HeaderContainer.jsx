import { connect } from 'react-redux';
import Header from './Header';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  isLoggedIn: state.shared.isLoggedIn,
  menuToggled: state.shared.menuToggled,
});

export default connect(mapStateToProps)(Header);
