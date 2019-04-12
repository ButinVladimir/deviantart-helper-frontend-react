import { connect } from 'react-redux';
import DeviationsDetailsForm from './DeviationsDetailsForm';

/**
 * @description
 * Maps Redux state to header props.
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
 * Maps Redux dispatch to header props.
 *
 * @returns {Object} Props.
 */
const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviationsDetailsForm);
