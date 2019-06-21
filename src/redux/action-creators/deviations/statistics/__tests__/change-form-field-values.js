import * as deviationsStatisticsForm from '../change-form-field-values';
import { DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES } from '../../../../actions';
import { FIELD_DOWNLOADS, ORDER_ASC } from '../../../../../consts/sort';
import { SHOW_NON_NSFW } from '../../../../../consts/nsfw-options';

describe('DeviationsStatisticsChangeFormFieldValues action creator', () => {
  it('can change published time begin', () => {
    const date = new Date();
    const action = deviationsStatisticsForm.changePublishedTimeBeginActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      publishedTimeBegin: date.getTime(),
    });
  });

  it('can change published time end', () => {
    const date = new Date();
    const action = deviationsStatisticsForm.changePublishedTimeEndActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      publishedTimeEnd: date.getTime(),
    });
  });

  it('can change sort field', () => {
    const sortField = FIELD_DOWNLOADS;
    const action = deviationsStatisticsForm.changeSortFieldActionCreator(sortField);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      sortField,
    });
  });

  it('can change sort order', () => {
    const sortOrder = ORDER_ASC;
    const action = deviationsStatisticsForm.changeSortOrderActionCreator(sortOrder);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      sortOrder,
    });
  });

  it('can change title', () => {
    const title = 'Title';
    const action = deviationsStatisticsForm.changeTitleActionCreator(title);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      title,
    });
  });

  it('can change NSFW', () => {
    const nsfw = SHOW_NON_NSFW;
    const action = deviationsStatisticsForm.changeNsfwActionCreator(nsfw);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      nsfw,
    });
  });

  it('can change filter by ids', () => {
    const filterByIds = true;
    const action = deviationsStatisticsForm.changeFilterByIdsActionCreator(filterByIds);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      filterByIds,
    });
  });

  it('can change timestamp begin', () => {
    const date = new Date();
    const action = deviationsStatisticsForm.changeTimestampBeginActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      timestampBegin: date.getTime(),
    });
  });

  it('can change timestamp end', () => {
    const date = new Date();
    const action = deviationsStatisticsForm.changeTimestampEndActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_STATISTICS_CHANGE_FORM_FIELD_VALUES,
      timestampEnd: date.getTime(),
    });
  });
});
