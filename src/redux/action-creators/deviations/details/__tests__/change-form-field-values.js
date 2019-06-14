import * as deviationsDetailsForm from '../change-form-field-values';
import { DEVIATIONS_DETAILS_CHANGE_FORM_FIELD_VALUES } from '../../../../actions';

describe('DeviationsDetailsChangeFormFieldValues action creator', () => {
  it('can change published time begin', () => {
    const date = new Date();
    const action = deviationsDetailsForm.changeTimestampBeginActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_DETAILS_CHANGE_FORM_FIELD_VALUES,
      timestampBegin: date.getTime(),
    });
  });

  it('can change published time end', () => {
    const date = new Date();
    const action = deviationsDetailsForm.changeTimestampEndActionCreator(date);

    expect(action).toEqual({
      type: DEVIATIONS_DETAILS_CHANGE_FORM_FIELD_VALUES,
      timestampEnd: date.getTime(),
    });
  });
});
