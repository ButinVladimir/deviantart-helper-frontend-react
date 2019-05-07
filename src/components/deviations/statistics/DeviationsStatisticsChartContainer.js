import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsStatisticsChart from './DeviationsStatisticsChart';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  deviations: state.deviations.statistics.deviations,
  metadata: state.deviations.statistics.metadata,
});

export default consumeConfig(
  connect(mapStateToProps)(DeviationsStatisticsChart),
);
