import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationsDetailsChartTab from './DeviationsDetailsChartTab';
import deviationsDetailsSetMetadataActionCreator from '../../../redux/action-creators/deviations/details/set-metadata';
import * as deviationsDetails from '../../../redux/action-creators/deviations/details/change-form-field-values';

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
  metadataLoading: state.deviations.details.metadataLoading,
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
    value => dispatch(deviationsDetails.changeTimestampBeginActionCreator(value)),
  timestampEndChangeHandler:
    value => dispatch(deviationsDetails.changeTimestampEndActionCreator(value)),
  submitHandler: () => dispatch(deviationsDetailsSetMetadataActionCreator(ownProps.config)),
});

export default consumeConfig(
  connect(mapStateToProps, mapDispatchToProps)(DeviationsDetailsChartTab),
);
