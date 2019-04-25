import { connect } from 'react-redux';
import deviationsBrowseChangeTitleActionCreator from '../../../redux/action-creators/deviations/browse/change-title';
import deviationsBrowseChangePublishedTimeBeginActionCreator from '../../../redux/action-creators/deviations/browse/change-published-time-begin';
import deviationsBrowseChangePublishedTimeEndActionCreator from '../../../redux/action-creators/deviations/browse/change-published-time-end';
import deviationsBrowseChangeSortFieldActionCreator from '../../../redux/action-creators/deviations/browse/change-sort-field';
import deviationsBrowseChangeSortOrderActionCreator from '../../../redux/action-creators/deviations/browse/change-sort-order';
import deviationsBrowseLoadPageActionCreator, { loadPage } from '../../../redux/action-creators/deviations/browse/load-page';
import DeviationsBrowseForm from './DeviationsBrowseForm';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  page: state.deviations.browse.page,
  pageCount: state.deviations.browse.pageCount,
  sortField: state.deviations.browse.sortField,
  sortOrder: state.deviations.browse.sortOrder,
  title: state.deviations.browse.title,
  publishedTimeBegin: state.deviations.browse.publishedTimeBegin,
  publishedTimeEnd: state.deviations.browse.publishedTimeEnd,
  pageLoading: state.deviations.browse.pageLoading,
  showPagination: state.deviations.browse.showPagination,
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
  titleChangeHandler: e => dispatch(deviationsBrowseChangeTitleActionCreator(e.target.value)),
  publishedTimeBeginChangeHandler:
    value => dispatch(deviationsBrowseChangePublishedTimeBeginActionCreator(value)),
  publishedTimeEndChangeHandler:
    value => dispatch(deviationsBrowseChangePublishedTimeEndActionCreator(value)),
  sortFieldChangeHandler:
    e => dispatch(deviationsBrowseChangeSortFieldActionCreator(e.target.value)),
  sortOrderChangeHandler:
    e => dispatch(deviationsBrowseChangeSortOrderActionCreator(e.target.value)),
  submitHandler: () => dispatch(deviationsBrowseLoadPageActionCreator(ownProps.config)),
  // Pagination in Bulma starts from 1 while pagination on backend start from 0.
  loadPageHandler: page => dispatch(loadPage(page - 1, ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowseForm);
