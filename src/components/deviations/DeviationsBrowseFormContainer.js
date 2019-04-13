import { connect } from 'react-redux';
import deviationsChangeTitleActionCreator from '../../redux/action-creators/deviations/change-title';
import deviationsChangePublishedTimeBeginActionCreator from '../../redux/action-creators/deviations/change-published-time-begin';
import deviationsChangePublishedTimeEndActionCreator from '../../redux/action-creators/deviations/change-published-time-end';
import deviationsChangeSortFieldActionCreator from '../../redux/action-creators/deviations/change-sort-field';
import deviationsChangeSortOrderActionCreator from '../../redux/action-creators/deviations/change-sort-order';
import deviationsBrowseActionCreator from '../../redux/action-creators/deviations/browse';
import deviationsBrowsePrevPageActionCreator from '../../redux/action-creators/deviations/browse-prev-page';
import deviationsBrowseNextPageActionCreator from '../../redux/action-creators/deviations/browse-next-page';
import DeviationsBrowseForm from './DeviationsBrowseForm';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  page: state.deviations.pageBrowse,
  sortField: state.deviations.sortField,
  sortOrder: state.deviations.sortOrder,
  title: state.deviations.title,
  publishedTimeBegin: state.deviations.publishedTimeBegin,
  publishedTimeEnd: state.deviations.publishedTimeEnd,
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
  titleChangeHandler: e => dispatch(deviationsChangeTitleActionCreator(e.target.value)),
  publishedTimeBeginChangeHandler:
    e => dispatch(deviationsChangePublishedTimeBeginActionCreator(e.target.value)),
  publishedTimeEndChangeHandler:
    e => dispatch(deviationsChangePublishedTimeEndActionCreator(e.target.value)),
  sortFieldChangeHandler: e => dispatch(deviationsChangeSortFieldActionCreator(e.target.value)),
  sortOrderChangeHandler: e => dispatch(deviationsChangeSortOrderActionCreator(e.target.value)),
  submitHandler: () => dispatch(deviationsBrowseActionCreator(ownProps.config)),
  prevPageHandler: () => dispatch(deviationsBrowsePrevPageActionCreator(ownProps.config)),
  nextPageHandler: () => dispatch(deviationsBrowseNextPageActionCreator(ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowseForm);
