import { connect } from 'react-redux';
import DeviationsDetailsChartTab from './DeviationsDetailsChartTab';
import deviationsDetailsSetDataActionCreator from '../../../redux/action-creators/deviations/details/set-data';
import deviationsDetailsChangeTimestampBeginActionCreator from '../../../redux/action-creators/deviations/details/change-timestamp-begin';
import deviationsDetailsChangeTimestampEndActionCreator from '../../../redux/action-creators/deviations/details/change-timestamp-end';
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
  timestampBegin: state.deviations.details.timestampBegin,
  timestampEnd: state.deviations.details.timestampEnd,
  metadata: state.deviations.details.metadata,
  chartType: state.deviations.details.chartType,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The Redux dispatch.
 * @param {Object} ownProps - The own component props.
 * @returns {Object} Props.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  timestampBeginChangeHandler:
    value => dispatch(deviationsDetailsChangeTimestampBeginActionCreator(value)),
  timestampEndChangeHandler:
    value => dispatch(deviationsDetailsChangeTimestampEndActionCreator(value)),
  submitHandler: () => dispatch(deviationsDetailsSetDataActionCreator(ownProps.config)),
  chartTypeChangeHandler:
    e => dispatch(deviationsDetailsChangeChartTypeActionCreator(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsDetailsChartTab);
