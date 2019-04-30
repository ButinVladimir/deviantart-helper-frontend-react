import { connect } from 'react-redux';
import DeviationsDetailsPreviewTab from './DeviationsDetailsPreviewTab';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  preview: state.deviations.details.preview,
  title: state.deviations.details.title,
});

export default connect(mapStateToProps)(DeviationsDetailsPreviewTab);
