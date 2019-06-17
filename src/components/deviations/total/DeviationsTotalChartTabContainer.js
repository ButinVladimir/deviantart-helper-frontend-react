import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsTotalChartTab from './DeviationsTotalChartTab';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  metadata: state.deviations.total.metadata,
});

export default consumeConfig(
  connect(mapStateToProps)(DeviationsTotalChartTab),
);
