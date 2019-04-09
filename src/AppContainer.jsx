import { connect } from 'react-redux';
import App from './App';
import { createLoadUserInfoAction } from './redux/action-creators';
import './redux/state';

/**
 * @description
 * Maps Redux state to app props.
 *
 * @returns {Object} Props.
 */
const mapStateToProps = () => ({

});

/**
 * @description
 * Loads user info.
 *
 * @param {Config} config - The config.
 * @returns {Promise<any>} The promise object.
 */
const loadUserInfo = config => async (dispatch) => {
  try {
    const response = await fetch(`${config.serverUrl}/user/info`, { mode: 'cors', credentials: 'include' });
    const jsonResponse = await response.json();
    dispatch(
      createLoadUserInfoAction(
        jsonResponse.userId,
        jsonResponse.userName,
        jsonResponse.userIcon,
        jsonResponse.userType,
        jsonResponse.accessTokenExpires,
        jsonResponse.refreshTokenExpires,
      ),
    );
  } catch (e) {
    console.error(e);
  }
};

/**
 * @description
 * Maps Redux dispatch to app props.
 *
 * @param {Function} dispatch - Redux dispatch.
 * @returns {Object} Props.
 */
const mapDispatchToProps = dispatch => ({
  fetchUserData: (config) => {
    dispatch(loadUserInfo(config));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
