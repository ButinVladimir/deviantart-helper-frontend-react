import getTimestamp from '../get-timestamp';

describe('Get timestamp helper', () => {
  it('gets timestamp from date', () => {
    const date = new Date();
    const timestamp = getTimestamp(date);

    expect(timestamp).toBe(date.getTime());
  });

  it('gets null from null', () => {
    const timestamp = getTimestamp(null);

    expect(timestamp).toBe(null);
  });
});
