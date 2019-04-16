import { connect } from 'react-redux';
import deviationsBrowseChangeTitleActionCreator from '../../../redux/action-creators/deviations/browse/change-title';
import deviationsBrowseChangePublishedTimeBeginActionCreator from '../../../redux/action-creators/deviations/browse/change-published-time-begin';
import deviationsBrowseChangePublishedTimeEndActionCreator from '../../../redux/action-creators/deviations/browse/change-published-time-end';
import deviationsBrowseChangeSortFieldActionCreator from '../../../redux/action-creators/deviations/browse/change-sort-field';
import deviationsBrowseChangeSortOrderActionCreator from '../../../redux/action-creators/deviations/browse/change-sort-order';
import deviationsBrowseLoadPageActionCreator from '../../../redux/action-creators/deviations/browse/load-page';
import deviationsBrowsePrevPageActionCreator from '../../../redux/action-creators/deviations/browse/prev-page';
import deviationsBrowseNextPageActionCreator from '../../../redux/action-creators/deviations/browse/next-page';
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
  sortField: state.deviations.browse.sortField,
  sortOrder: state.deviations.browse.sortOrder,
  title: state.deviations.browse.title,
  publishedTimeBegin: state.deviations.browse.publishedTimeBegin,
  publishedTimeEnd: state.deviations.browse.publishedTimeEnd,
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
    e => dispatch(deviationsBrowseChangePublishedTimeBeginActionCreator(e.target.value)),
  publishedTimeEndChangeHandler:
    e => dispatch(deviationsBrowseChangePublishedTimeEndActionCreator(e.target.value)),
  sortFieldChangeHandler:
    e => dispatch(deviationsBrowseChangeSortFieldActionCreator(e.target.value)),
  sortOrderChangeHandler:
    e => dispatch(deviationsBrowseChangeSortOrderActionCreator(e.target.value)),
  submitHandler: () => dispatch(deviationsBrowseLoadPageActionCreator(ownProps.config)),
  prevPageHandler: () => dispatch(deviationsBrowsePrevPageActionCreator(ownProps.config)),
  nextPageHandler: () => dispatch(deviationsBrowseNextPageActionCreator(ownProps.config)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsBrowseForm);
