import { connect } from 'react-redux';
import DeviationsTotalValues from './DeviationsTotalValues';

/**
 * @description
 * Maps Redux state to props.
 *
 * @param {State} state - The Redux state.
 * @returns {Object} Props.
 */
const mapStateToProps = state => ({
  views: state.deviations.total.views,
  favourites: state.deviations.total.favourites,
  comments: state.deviations.total.comments,
  downloads: state.deviations.total.downloads,
});

export default connect(mapStateToProps)(DeviationsTotalValues);
