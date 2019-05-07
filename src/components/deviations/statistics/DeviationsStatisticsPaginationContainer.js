import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import deviationsStatisticsLoadPageActionCreator from '../../../redux/action-creators/deviations/statistics/load-page';
import ContentPagination from '../../shared/ContentPagination';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  page: state.deviations.statistics.page,
  pageCount: state.deviations.statistics.pageCount,
  showPagination: state.deviations.statistics.showPagination,
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
  // Pagination in Bulma starts from 1 while pagination on backend start from 0.
  loadPageHandler:
    page => dispatch(deviationsStatisticsLoadPageActionCreator(page - 1, ownProps.config)),
});

export default consumeConfig(
  connect(mapStateToProps, mapDispatchToProps)(ContentPagination),
);
