import { connect } from 'react-redux';
import DeviationsDetailsForm from './DeviationsDetailsForm';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  preview: state.deviations.deviationDetails.preview,
  title: state.deviations.deviationDetails.title,
  url: state.deviations.deviationDetails.url,
  publishedTime: state.deviations.deviationDetails.publishedTime,
  description: state.deviations.deviationDetails.description,
  views: state.deviations.deviationDetails.views,
  favourites: state.deviations.deviationDetails.favourites,
  comments: state.deviations.deviationDetails.comments,
  downloads: state.deviations.deviationDetails.downloads,
});

export default connect(mapStateToProps)(DeviationsDetailsForm);
