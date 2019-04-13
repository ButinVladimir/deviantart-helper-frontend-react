import { connect } from 'react-redux';
import DeviationDetails from './DeviationsDetails';
import deviationsDetailsSetIdActionCreator from '../../redux/action-creators/deviations/details-set-id';
import deviationsDetailsSetDataActionCreator from '../../redux/action-creators/deviations/details-set-data';
import deviationsChangeTimestampBeginActionCreator from '../../redux/action-creators/deviations/change-timestamp-begin';
import deviationsChangeTimestampEndActionCreator from '../../redux/action-creators/deviations/change-timestamp-end';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  timestampBegin: state.deviations.timestampBegin,
  timestampEnd: state.deviations.timestampEnd,
});

/**
 * @description
 * Maps Redux dispatch to props.
 *
 * @param {Function} dispatch - The dispatch.
 * @param {Object} ownProps - The own component props.
 * @returns {Object} Props.
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadDeviationDetailsHandler: () => {
    dispatch(deviationsDetailsSetIdActionCreator(ownProps.match.params.id, ownProps.config));
  },
  timestampBeginChangeHandler: (e) => dispatch(deviationsChangeTimestampBeginActionCreator(e.target.value)),
  timestampEndChangeHandler: (e) => dispatch(deviationsChangeTimestampEndActionCreator(e.target.value)),
  submitHandler: () => dispatch(deviationsDetailsSetDataActionCreator(ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationDetails);
