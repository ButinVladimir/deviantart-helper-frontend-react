import { connect } from 'react-redux';
import Chart from '../../chart/Chart';
import * as deviationChart from '../../../redux/action-creators/deviations/chart/change-form-field-values';
import * as dataSet from '../../../consts/data-sets';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  dataSetTitlesMap: new Map([
    [dataSet.DATA_SET_VIEWS, 'Views'],
    [dataSet.DATA_SET_FAVOURITES, 'Favourites'],
    [dataSet.DATA_SET_COMMENTS, 'Comments'],
    [dataSet.DATA_SET_DOWNLOADS, 'Downloads'],
  ]),
  dataSet: state.deviations.chart.dataSet,
  roundPeriod: state.deviations.chart.roundPeriod,
  showTime: state.deviations.chart.showTime,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
