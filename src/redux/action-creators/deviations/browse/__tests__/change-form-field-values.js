import * as deviationsBrowseForm from '../change-form-field-values';
import { DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES } from '../../../../actions';
import { FIELD_DOWNLOADS, ORDER_ASC } from '../../../../../consts/sort';
import { SHOW_NON_NSFW } from '../../../../../consts/nsfw-options';

describe('DeviationsBrowseChangeFormFieldValues action creator', () => {
  it('can change published time begin', () => {
    const date = new Date();
    const action = deviationsBrowseForm.changePublishedTimeBeginActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES,
      publishedTimeBegin: date.getTime(),
    });
  });

  it('can change published time end', () => {
    const date = new Date();
    const action = deviationsBrowseForm.changePublishedTimeEndActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES,
      publishedTimeEnd: date.getTime(),
    });
  });

  it('can change sort field', () => {
    const sortField = FIELD_DOWNLOADS;
    const action = deviationsBrowseForm.changeSortFieldActionCreator(sortField);

    expect(action).toEqual({
      type: DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES,
      sortField,
    });
  });

  it('can change sort order', () => {
    const sortOrder = ORDER_ASC;
    const action = deviationsBrowseForm.changeSortOrderActionCreator(sortOrder);

    expect(action).toEqual({
      type: DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES,
      sortOrder,
    });
  });

  it('can change title', () => {
    const title = 'Title';
    const action = deviationsBrowseForm.changeTitleActionCreator(title);

    expect(action).toEqual({
      type: DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES,
      title,
    });
  });

  it('can change NSFW', () => {
    const nsfw = SHOW_NON_NSFW;
    const action = deviationsBrowseForm.changeNsfwActionCreator(nsfw);

    expect(action).toEqual({
      type: DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES,
      nsfw,
    });
  });

  it('can change filter by ids', () => {
    const filterByIds = true;
    const action = deviationsBrowseForm.changeFilterByIdsActionCreator(filterByIds);

    expect(action).toEqual({
      type: DEVIATIONS_BROWSE_CHANGE_FORM_FIELD_VALUES,
      filterByIds,
    });
  });
});
