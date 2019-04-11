import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Error({
  showError,
  errorMessage,
  hideErrorHandler,
}) {
  return (
    <Fragment>
      {showError && (
        <div>
          <span>{`Error: ${errorMessage}`}</span>
          <button type="button" onClick={hideErrorHandler}>Hide error</button>
        </div>
      )}
    </Fragment>
  );
}

Error.propTypes = {
  showError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  hideErrorHandler: PropTypes.func.isRequired,
};
