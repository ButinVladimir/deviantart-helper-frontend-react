import { connect } from 'react-redux';
import DeviationsDetailsMetadata from './DeviationsDetailsMetadata';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  metadata: state.deviations.deviationDetailsMetadata,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @returns {Object} Props.
 */
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsDetailsMetadata);
