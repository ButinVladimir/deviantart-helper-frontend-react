import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeviationsDetailsForm from './DeviationsDetailsFormContainer';
import DeviationsDetailsMetadata from './DeviationsDetailsMetadataContainer';
import Config from '../../../config/config';

export default class DeviationsDetails extends Component {
  componentDidMount() {
    const { loadDeviationDetailsHandler } = this.props;

    loadDeviationDetailsHandler();
  }

  render() {
    const {
      timestampBegin,
      timestampEnd,
      timestampBeginChangeHandler,
      timestampEndChangeHandler,
      submitHandler,
    } = this.props;

    return (
      <div>
        <DeviationsDetailsForm />
        <div>
          <span>Timestamp begin: </span>
          <input name="timestampBegin" value={timestampBegin} onChange={timestampBeginChangeHandler} />
          <span>{new Date(parseInt(timestampBegin, 10)).toLocaleString()}</span>
        </div>
        <div>
          <span>Timestamp end: </span>
          <input name="timestampEnd" value={timestampEnd} onChange={timestampEndChangeHandler} />
          <span>{new Date(parseInt(timestampEnd, 10)).toLocaleString()}</span>
        </div>
        <div>
          <button type="button" onClick={submitHandler}>Submit</button>
        </div>
        <DeviationsDetailsMetadata />
      </div>
    );
  }
}

DeviationsDetails.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  config: PropTypes.instanceOf(Config).isRequired,
  timestampBegin: PropTypes.string.isRequired,
  timestampEnd: PropTypes.string.isRequired,
  timestampBeginChangeHandler: PropTypes.func.isRequired,
  timestampEndChangeHandler: PropTypes.func.isRequired,
  loadDeviationDetailsHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
