import * as deviationsTotalForm from '../change-form-field-values';
import { DEVIATIONS_TOTAL_CHANGE_FORM_FIELD_VALUES } from '../../../../actions';

describe('DeviationsTotalChangeFormFieldValues action creator', () => {
  it('can change published time begin', () => {
    const date = new Date();
    const action = deviationsTotalForm.changeTimestampBeginActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_TOTAL_CHANGE_FORM_FIELD_VALUES,
      timestampBegin: date.getTime(),
    });
  });

  it('can change published time end', () => {
    const date = new Date();
    const action = deviationsTotalForm.changeTimestampEndActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_TOTAL_CHANGE_FORM_FIELD_VALUES,
      timestampEnd: date.getTime(),
    });
  });
});
