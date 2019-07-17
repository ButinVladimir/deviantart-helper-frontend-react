import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsTotalForm from './DeviationsTotalForm';
import * as deviationsTotal from '../../../redux/action-creators/deviations/total/change-form-field-values';
import deviationsTotalStartLoading from '../../../redux/action-creators/deviations/total/start-loading';
import deviationsTotalChangeTab from '../../../redux/action-creators/deviations/total/change-tab';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  tab: state.deviations.total.tab,
  timestampBegin: state.deviations.total.timestampBegin,
  timestampEnd: state.deviations.total.timestampEnd,
  totalLoading: state.deviations.total.totalLoading,
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
  changeTabHandler: tab => () => dispatch(deviationsTotalChangeTab(tab, ownProps.config)),
  timestampBeginChangeHandler:
    value => dispatch(deviationsTotal.changeTimestampBeginActionCreator(value)),
  timestampEndChangeHandler:
    value => dispatch(deviationsTotal.changeTimestampEndActionCreator(value)),
  submitHandler: () => dispatch(deviationsTotalStartLoading(ownProps.config)),
});

export default consumeConfig(
  connect(mapStateToProps, mapDispatchToProps)(DeviationsTotalForm),
);
