import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import DeviationDetails from './DeviationsDetails';
import clearLoadedDataActionCreator from '../../../redux/action-creators/shared/clear-loaded-data';
import deviationsDetailsChangeTabActionCreator from '../../../redux/action-creators/deviations/details/change-tab';
import deviationsDetailsSetIdActionCreator from '../../../redux/action-creators/deviations/details/set-id';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  title: state.deviations.details.title,
  tab: state.deviations.details.tab,
  detailsLoading: state.deviations.details.detailsLoading,
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
  clearDataHandler: () => dispatch(clearLoadedDataActionCreator()),
  changeTabHandler: tab => () => {
    dispatch(deviationsDetailsChangeTabActionCreator(tab, ownProps.config));
  },
  loadDeviationDetailsHandler: () => {
    dispatch(deviationsDetailsSetIdActionCreator(ownProps.match.params.id, ownProps.config));
  },
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(DeviationDetails));
