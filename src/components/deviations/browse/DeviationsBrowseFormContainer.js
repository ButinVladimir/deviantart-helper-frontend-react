import { connect } from 'react-redux';
import consumeConfig from '../../shared/ConfigContext';
import * as deviationsBrowseForm from '../../../redux/action-creators/deviations/browse/change-form-field-values';
import deviationsBrowseLoadPageActionCreator, { deviationsBrowseLoadFirstPageActionCreator } from '../../../redux/action-creators/deviations/browse/load-page';
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
  nsfw: state.deviations.browse.nsfw,
  filterByIds: state.deviations.browse.filterByIds,
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
  titleChangeHandler: e => dispatch(deviationsBrowseForm.changeTitleActionCreator(e.target.value)),
  publishedTimeBeginChangeHandler:
    value => dispatch(deviationsBrowseForm.changePublishedTimeBeginActionCreator(value)),
  publishedTimeEndChangeHandler:
    value => dispatch(deviationsBrowseForm.changePublishedTimeEndActionCreator(value)),
  sortFieldChangeHandler:
    e => dispatch(deviationsBrowseForm.changeSortFieldActionCreator(e.target.value)),
  sortOrderChangeHandler:
    e => dispatch(deviationsBrowseForm.changeSortOrderActionCreator(e.target.value)),
  nsfwChangeHandler:
    e => dispatch(deviationsBrowseForm.changeNsfwActionCreator(e.target.value)),
  filterByIdsChangeHandler:
    e => dispatch(deviationsBrowseForm.changeFilterByIdsActionCreator(e.target.checked)),
  submitHandler: () => dispatch(deviationsBrowseLoadFirstPageActionCreator(ownProps.config)),
  // Pagination in Bulma starts from 1 while pagination on backend start from 0.
  loadPageHandler:
    page => dispatch(deviationsBrowseLoadPageActionCreator(page - 1, ownProps.config)),
});

export default consumeConfig(connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowseForm));
