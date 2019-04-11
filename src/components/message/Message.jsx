import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Message({
  showMessage,
  message,
  hideMessageHandler,
}) {
  return (
    <Fragment>
      {showMessage && (
        <div>
          <span>{`Message: ${message}`}</span>
          <button type="button" onClick={hideMessageHandler}>Hide</button>
        </div>
      )}
    </Fragment>
  );
}

Message.propTypes = {
  showMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  hideMessageHandler: PropTypes.func.isRequired,
};
