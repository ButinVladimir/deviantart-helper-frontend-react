import { connect } from 'react-redux';
import DeviationsBrowse from './DeviationsBrowse';
import consumeConfig from '../../shared/ConfigContext';
import clearLoadedDataActionCreator from '../../../redux/action-creators/shared/clear-loaded-data';
import { deviationsBrowseLoadCurrentPageActionCreator } from '../../../redux/action-creators/deviations/browse/load-page';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  pageLoading: state.deviations.browse.pageLoading,
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
  preloadDeviationsHandler:
    () => dispatch(deviationsBrowseLoadCurrentPageActionCreator(ownProps.config)),
  clearDataHandler: () => dispatch(clearLoadedDataActionCreator()),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowse));
