import { connect } from 'react-redux';
import Chart from '../../chart/Chart';
import * as deviationChart from '../../../redux/action-creators/deviations/chart/change-form-field-values';
import { dataSetOptions } from '../../../consts/data-sets';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  dataSetTitlesMap: new Map(dataSetOptions),
  dataSet: state.deviations.chart.dataSet,
  roundPeriod: state.deviations.chart.roundPeriod,
  showTime: state.deviations.chart.showTime,
  showDifferences: state.deviations.chart.showDifferences,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The Redux dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  dataSetChangeHandler:
    e => dispatch(deviationChart.changeDataSetActionCreator(e.target.value)),
  roundPeriodChangeHandler:
    e => dispatch(deviationChart.changeRoundPeriodActionCreator(e.target.value)),
  showTimeChangeHandler:
    e => dispatch(deviationChart.changeShowTimeActionCreator(e.target.checked)),
  showDifferencesChangeHandler:
    e => dispatch(deviationChart.changeShowDifferencesActionCreator(e.target.checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
