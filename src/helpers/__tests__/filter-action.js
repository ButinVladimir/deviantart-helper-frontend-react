import filterAction from '../filter-action';

describe('Filter action', () => {
  it('filters fields from action', () => {
    const action = {
      rightField: 'value',
      wrongField: 'anotherValue',
      anotherRightField: 3,
    };
    const filteredAction = filterAction(action, ['rightField', 'anotherRightField']);

    expect(filteredAction).toEqual({
      rightField: 'value',
      anotherRightField: 3,
    });
  });
});
