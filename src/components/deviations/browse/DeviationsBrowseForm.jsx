import React from 'react';
import PropTypes from 'prop-types';
import * as sort from '../../../consts/sort';
import Config from '../../../config/config';

export default function DeviationsBrowseForm({
  // eslint-disable-next-line no-unused-vars
  config,
  page,
  sortField,
  sortOrder,
  title,
  publishedTimeBegin,
  publishedTimeEnd,
  prevPageHandler,
  nextPageHandler,
  sortFieldChangeHandler,
  sortOrderChangeHandler,
  titleChangeHandler,
  publishedTimeBeginChangeHandler,
  publishedTimeEndChangeHandler,
  submitHandler,
}) {
  return (
    <div>
      <div>
        <span>Title: </span>
        <input name="title" value={title} onChange={titleChangeHandler} />
      </div>
      <div>
        <span>Published time begin: </span>
        <input name="publishedTimeBegin" value={publishedTimeBegin} onChange={publishedTimeBeginChangeHandler} />
        <span>{new Date(parseInt(publishedTimeBegin, 10)).toLocaleString()}</span>
      </div>
      <div>
        <span>Published time end: </span>
        <input name="publishedTimeEnd" value={publishedTimeEnd} onChange={publishedTimeEndChangeHandler} />
        <span>{new Date(parseInt(publishedTimeEnd, 10)).toLocaleString()}</span>
      </div>
      <div>
        <span>Sort by: </span>
        <select name="sortField" value={sortField} onChange={sortFieldChangeHandler}>
          <option value={sort.FIELD_TITLE}>Title</option>
          <option value={sort.FIELD_PUBLISHED_TIME}>Published time</option>
          <option value={sort.FIELD_VIEWS}>View count</option>
          <option value={sort.FIELD_FAVOURITES}>Favourite count</option>
          <option value={sort.FIELD_COMMENTS}>Comment count</option>
          <option value={sort.FIELD_DOWNLOADS}>Download count</option>
        </select>
      </div>
      <div>
        <span>Sort order: </span>
        <select name="sortOrder" value={sortOrder} onChange={sortOrderChangeHandler}>
          <option value={sort.ORDER_ASC}>Ascending</option>
          <option value={sort.ORDER_DESC}>Descending</option>
        </select>
      </div>
      <div>
        <button type="button" onClick={submitHandler}>Submit</button>
      </div>
      <div>
        <button type="button" onClick={prevPageHandler}>Prev page</button>
        <span>{` - ${page} - `}</span>
        <button type="button" onClick={nextPageHandler}>Next page</button>
      </div>
    </div>
  );
}

DeviationsBrowseForm.propTypes = {
  config: PropTypes.instanceOf(Config).isRequired,
  page: PropTypes.number.isRequired,
  sortField: PropTypes.string.isRequired,
  sortOrder: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  publishedTimeBegin: PropTypes.string.isRequired,
  publishedTimeEnd: PropTypes.string.isRequired,
  prevPageHandler: PropTypes.func.isRequired,
  nextPageHandler: PropTypes.func.isRequired,
  sortFieldChangeHandler: PropTypes.func.isRequired,
  sortOrderChangeHandler: PropTypes.func.isRequired,
  titleChangeHandler: PropTypes.func.isRequired,
  publishedTimeBeginChangeHandler: PropTypes.func.isRequired,
  publishedTimeEndChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
