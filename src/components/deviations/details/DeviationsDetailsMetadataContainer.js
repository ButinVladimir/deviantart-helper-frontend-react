import { connect } from 'react-redux';
import DeviationsDetailsMetadata from './DeviationsDetailsMetadata';
import deviationsDetailsChangeChartTypeActionCreator from '../../../redux/action-creators/deviations/details/change-chart-type';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  id: state.deviations.details.id,
  title: state.deviations.details.title,
  metadata: state.deviations.details.metadata,
  chartType: state.deviations.details.chartType,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The Redux dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  chartTypeChangeHandler:
    e => dispatch(deviationsDetailsChangeChartTypeActionCreator(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsDetailsMetadata);
