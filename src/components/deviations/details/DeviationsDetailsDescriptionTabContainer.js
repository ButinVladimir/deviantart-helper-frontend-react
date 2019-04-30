import { connect } from 'react-redux';
import DeviationsDetailsDescriptionTab from './DeviationsDetailsDescriptionTab';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  title: state.deviations.details.title,
  thumbnail: state.deviations.details.thumbnail,
  url: state.deviations.details.url,
  publishedTime: state.deviations.details.publishedTime,
  description: state.deviations.details.description,
  views: state.deviations.details.views,
  favourites: state.deviations.details.favourites,
  comments: state.deviations.details.comments,
  downloads: state.deviations.details.downloads,
});

export default connect(mapStateToProps)(DeviationsDetailsDescriptionTab);
