import { connect } from 'react-redux';
import DeviationsBrowseList from './DeviationsBrowseList';

/**
 * @description
 * Maps Redux state to header props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  deviations: state.deviations.deviationsBrowse,
});

export default connect(mapStateToProps)(DeviationsBrowseList);
